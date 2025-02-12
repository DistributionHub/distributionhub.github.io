const distroList = document.getElementById('distroList');

const scrollToTop = document.querySelector('.scroll-to-top');

scrollToTop.style.display = 'none';

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTop.style.display = 'flex';
        gsap.to(scrollToTop, { duration: 0.3, opacity: 1, scale: 1 });
    } else {
        gsap.to(scrollToTop, { 
            duration: 0.3, 
            opacity: 0, 
            scale: 0.8,
            onComplete: () => {
                if (window.pageYOffset <= 300) {
                    scrollToTop.style.display = 'none';
                }
            }
        });
    }
});

scrollToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const loadingAnimation = gsap.timeline();
loadingAnimation.from('h1', {
    duration: 1,
    opacity: 0,
    y: 30,
    ease: 'power3.out'
});

function createDistroCard(distro, animate = true) {
    const cleanVersion = distro.aarch64 ? distro.version.replace(/\sx86_64/i, '') : distro.version;
    
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
        <div class="card h-100">
            <div class="card-img-container">
                <img src="${distro.icon}" 
                     class="card-img-top" 
                     alt="${distro.name} logo" 
                     loading="lazy" 
                     decoding="async" 
                     fetchpriority="low"
                     onerror="this.onerror=null; this.src='img/default-distro.png';">
            </div>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">
                    ${distro.websiteLink ? `<a href="${distro.websiteLink}" class="distro-title-link" rel="noopener noreferrer">` : ''}
                    <strong>${distro.name}</strong>
                    ${distro.websiteLink ? '</a>' : ''}
                    ${distro.videoLink ? `<a href="${distro.videoLink}" class="video-link"><i class="fab fa-youtube"></i></a>` : ''}
                </h5>
                <div class="card-text distro-version">
                    <strong><i class="fas fa-code-branch"></i> Version:</strong> ${cleanVersion}
                    ${distro.aarch64 ? `
                        <div class="dropdown d-inline-block">
                            <button class="version-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="arch-text">x86_64</span> <i class="fas fa-caret-down ms-1"></i>
                            </button>
                            <ul class="dropdown-menu version-menu">
                                <li><a class="dropdown-item version-item" href="${distro.downloadLink}" data-torrent="${distro.torrent || ''}" data-arch="x86_64">x86_64</a></li>
                                <li><a class="dropdown-item version-item" href="${distro.aarch64}" data-torrent="${distro.aarch64Torrent || ''}" data-arch="AArch64">AArch64</a></li>
                            </ul>
                        </div>
                    ` : ''}
                </div>
                <p class="card-text flex-grow-1">${distro.description}</p>
                <div class="mt-auto position-relative">
                    <div class="btn-container">
                        <a href="${distro.downloadLink}" class="btn btn-download flex-grow-1 download-link" rel="noopener noreferrer">
                            <i class="fas fa-download me-2"></i>Direct Download
                        </a>
                        ${distro.torrent ? `
                        <a href="${distro.torrent}" class="torrent-icon torrent-link" title="Download via Torrent" rel="noopener noreferrer">
                            <i class="fas fa-magnet fa-lg"></i>
                        </a>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;

    if (distro.aarch64) {
        const versionItems = card.querySelectorAll('.version-item');
        const downloadLink = card.querySelector('.download-link');
        const torrentLink = card.querySelector('.torrent-link');
        
        versionItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                downloadLink.href = item.href;
                if (torrentLink) {
                    const torrentUrl = item.dataset.torrent;
                    if (torrentUrl) {
                        torrentLink.href = torrentUrl;
                        torrentLink.style.display = 'flex';
                    } else {
                        torrentLink.style.display = 'none';
                    }
                }
                // architecture
                const dropdownButton = card.querySelector('.version-dropdown');
                const archText = dropdownButton.querySelector('.arch-text');
                archText.textContent = item.dataset.arch;
            });
        });
    }

    distroList.appendChild(card);

    if (animate) {
        gsap.from(card, {
            duration: 0.8,
            opacity: 0,
            y: 50,
            ease: "power3.out"
        });
    }
}

let currentFilter = '';

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        if (currentFilter === filter) {
            currentFilter = ''; // clear 
        } else {
            button.classList.add('active');
            currentFilter = filter;
        }
        
        filterDistributions(searchInput.value);
    });
});

function filterDistributions(searchTerm) {
    const distroList = document.getElementById('distroList');
    distroList.innerHTML = '';

    const filteredDistros = distributions.filter(distro => {
        const matchesSearch = (
            distro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            distro.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            distro.version.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        let matchesCategory = !currentFilter || distro.category === currentFilter;

        if (currentFilter === 'torrent') {
            matchesCategory = distro.torrent !== undefined;
        }

        return matchesSearch && matchesCategory;
    });

    displayDistributions(filteredDistros);
}

let currentPage = 1;
const itemsPerPage = 12;

const paginationContainer = document.createElement('div');
paginationContainer.className = 'pagination-container d-flex justify-content-end';
document.querySelector('main').appendChild(paginationContainer);

function createPaginationControls(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    paginationContainer.innerHTML = '';
    
    if (totalPages <= 1) return;

    const paginationList = document.createElement('ul');
    paginationList.className = 'pagination';

    const prevLi = document.createElement('li');
    prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
    prevLi.innerHTML = `<a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
    </a>`;
    prevLi.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            filterDistributions(searchInput.value);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    paginationList.appendChild(prevLi);

    const firstLi = document.createElement('li');
    firstLi.className = `page-item ${currentPage === 1 ? 'active' : ''}`;
    firstLi.innerHTML = '<a class="page-link" href="#">1</a>';
    firstLi.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage = 1;
        filterDistributions(searchInput.value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    paginationList.appendChild(firstLi);

    if (totalPages > 1) {
        let startPage = Math.max(2, currentPage - 1);
        let endPage = Math.min(totalPages - 1, currentPage + 1);

        if (currentPage > 3) {
            paginationList.appendChild(createEllipsis());
        }

        for (let i = startPage; i <= endPage; i++) {
            const li = document.createElement('li');
            li.className = `page-item ${currentPage === i ? 'active' : ''}`;
            li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            li.addEventListener('click', (e) => {
                e.preventDefault();
                currentPage = i;
                filterDistributions(searchInput.value);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            paginationList.appendChild(li);
        }

        if (currentPage < totalPages - 2) {
            paginationList.appendChild(createEllipsis());
        }
    }

    if (totalPages > 1) {
        const lastLi = document.createElement('li');
        lastLi.className = `page-item ${currentPage === totalPages ? 'active' : ''}`;
        lastLi.innerHTML = `<a class="page-link" href="#">${totalPages}</a>`;
        lastLi.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = totalPages;
            filterDistributions(searchInput.value);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        paginationList.appendChild(lastLi);
    }

    const nextLi = document.createElement('li');
    nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
    nextLi.innerHTML = `<a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
    </a>`;
    nextLi.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            filterDistributions(searchInput.value);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    paginationList.appendChild(nextLi);

    paginationContainer.appendChild(paginationList);
}

function createEllipsis() {
    const li = document.createElement('li');
    li.className = 'page-item disabled';
    li.innerHTML = '<a class="page-link" href="#">...</a>';
    return li;
}

function displayDistributions(distros = distributions) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentDistros = distros.slice(startIndex, endIndex);
    
    distroList.innerHTML = '';
    currentDistros.forEach(distro => {
        createDistroCard(distro, true);
    });
    
    createPaginationControls(distros.length);
}

distributions.forEach((distro, index, self) => {
    if (self.findIndex(t => t.name === distro.name) === index) createDistroCard(distro, true);
});

const searchContainer = document.querySelector('.search-container');
const githubLink = document.querySelector('.github-link');
const warningLink = document.querySelector('.warning-link');

gsap.from(searchContainer, {
    duration: 0.8,
    opacity: 0,
    y: 50,
    ease: "power3.out"
});

const iconsTimeline = gsap.timeline();
iconsTimeline
    .from(warningLink, {
        duration: 0.8,
        opacity: 0,
        y: 50,
        ease: "power3.out"
    })
    .from(githubLink, {
        duration: 0.8,
        opacity: 0,
        y: 50,
        ease: "power3.out"
    }, "<");

const searchInput = document.getElementById('distroSearch');

searchInput.addEventListener('input', (e) => {
    filterDistributions(e.target.value);
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const tooltip = document.createElement('div');
        tooltip.className = 'copy-tooltip';
        tooltip.textContent = 'Link copied!';
        document.body.appendChild(tooltip);

        gsap.to(tooltip, {
            duration: 0.3,
            opacity: 1,
            y: -10
        });

        setTimeout(() => {
            gsap.to(tooltip, {
                duration: 0.3,
                opacity: 0,
                y: 0,
                onComplete: () => tooltip.remove()
            });
        }, 2000);
    });
}

const tooltipStyle = document.createElement('style');
tooltipStyle.textContent = `
    .copy-tooltip {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 8px 16px;
        border-radius: 4px;
        z-index: 1000;
        opacity: 0;
        pointer-events: none;
    }
`;
document.head.appendChild(tooltipStyle);

const style = document.createElement('style');
style.textContent = `
    .globe-icon {
        color: #FFFF;
        transition: color 0.3s ease;
    }
    .globe-icon:hover {
        color: #4FD2D7;
    }
    .link-icon {
        color: #FFFF;
        transition: color 0.3s ease;
    }
    .link-icon:hover {
        color: #4FD2D7;
    }
`;
document.head.appendChild(style);

particlesJS('particles-js', {
    particles: {
        number: { value: 300, density: { enable: true, value_area: 800 } },
        color: { value: ["#ffffff", "#87cefa", "#4FD2D7", "#8CFFFA"] },
        shape: { type: "circle" },
        opacity: { value: 0.8, random: true },
        size: { value: 5, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 0.2, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "bubble" }, onclick: { enable: true, mode: "repulse" }, resize: true },
        modes: { bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 }, repulse: { distance: 400, duration: 0.4 } }
    },
    retina_detect: true
});

document.addEventListener('DOMContentLoaded', () => {
    displayDistributions();
    
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

if (window.innerWidth <= 768) {
    const searchContainer = document.querySelector('.search-container');
    const searchContainerTop = searchContainer.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > searchContainerTop) {
            searchContainer.classList.add('sticky');
        } else {
            searchContainer.classList.remove('sticky');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            const newTop = searchContainer.offsetTop;
            if (newTop !== searchContainerTop) {
                searchContainerTop = newTop;
            }
        } else {
            searchContainer.classList.remove('sticky');
        }
    });
}