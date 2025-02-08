const distributions = [
    { name: "Ubuntu", version: "24.04.1 LTS x86_64", icon: "img/distro/ubuntu.png", downloadLink: "https://releases.ubuntu.com/noble/ubuntu-24.04.1-desktop-amd64.iso", description: "User-friendly and popular Linux distribution.", websiteLink: "https://ubuntu.com/", category: "beginner"},
    { name: "Fedora", version: "Workstation 41 x86_64", icon: "img/distro/fedora.svg", downloadLink: "https://download.fedoraproject.org/pub/fedora/linux/releases/41/Workstation/x86_64/iso/Fedora-Workstation-Live-x86_64-41-1.4.iso", description: "Cutting-edge distribution with latest technology.", websiteLink: "https://fedoraproject.org/", category: "beginner"},
    { name: "Debian", version: "12.9 x86_64", icon: "img/distro/debian.svg", downloadLink: "https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-12.9.0-amd64-netinst.iso", description: "Known for its stability and security.", websiteLink: "https://www.debian.org/", category: "advanced"},
    { name: "Arch Linux", version: "2025.02.01 x86_64", icon: "img/distro/arch.svg", downloadLink: "https://mirrors.dotsrc.org/archlinux/iso/2025.02.01/archlinux-2025.02.01-x86_64.iso", description: "Minimalist and highly customizable distribution.", websiteLink: "https://archlinux.org/", category: "advanced"},
    { name: "Linux Mint", version: "22.1 x86_64", icon: "img/distro/mint.svg", downloadLink: "https://ftp.rz.uni-frankfurt.de/pub/mirrors/linux-mint/iso/stable/22.1/linuxmint-22.1-cinnamon-64bit.iso", description: "Ubuntu-based, user-friendly distribution.", websiteLink: "https://linuxmint.com/", category: "beginner", videoLink: "https://www.youtube.com/watch?v=xaQdfqpJmyc"},
    { name: "Manjaro", version: "24.2.0 x86_64", icon: "img/distro/manjaro.svg", downloadLink: "https://download.manjaro.org/kde/24.2.0/manjaro-kde-24.2.0-241209-linux612.iso", description: "User-friendly Arch Linux-based distribution.", websiteLink: "https://manjaro.org/", category: "advanced"},
    { name: "EndeavourOS", version: "2024.06.25 x86_64", icon: "img/distro/eos.png", downloadLink: "https://mirror.alpix.eu/endeavouros/iso/EndeavourOS_Endeavour-2024.06.25.iso", description: "Flexible, user-friendly Arch-based distribution.", websiteLink: "https://endeavouros.com/", category: "advanced"},
    { name: "Pop!_OS", version: "22.04 LTS x86_64", icon: "img/distro/pop.png", downloadLink: "https://iso.pop-os.org/22.04/amd64/intel/43/pop-os_22.04_amd64_intel_43.iso", description: "Powerful Linux for productivity and gaming.", websiteLink: "https://pop.system76.com/", category: "beginner", videoLink: "https://www.youtube.com/watch?v=nLY-FqF7mW0"},
    { name: "Zorin OS", version: "17.2 Core x86_64", icon: "img/distro/zorin.svg", downloadLink: "https://zorin.mirrors.itworxx.de/17/Zorin-OS-17.2-Core-64-bit.iso", description: "Easy transition from Windows to Linux.", websiteLink: "https://zorin.com/os/", category: "beginner", videoLink: "https://www.youtube.com/watch?v=SLZJr1PHvmU"},
    { name: "Rocky Linux", version: "9.5 x86_64", icon: "img/distro/rocky.svg", downloadLink: "https://download.rockylinux.org/pub/rocky/9/isos/x86_64/Rocky-9.5-x86_64-dvd.iso", description: "RHEL-compatible Linux distribution.", websiteLink: "https://rockylinux.org/", category: "advanced"},
    { name: "openSUSE", version: "Leap 15.6 x86_64", icon: "img/distro/suse.png", downloadLink: "https://download.opensuse.org/distribution/leap/15.6/iso/openSUSE-Leap-15.6-NET-x86_64-Media.iso", description: "Versatile Linux with robust community support.", websiteLink: "https://www.opensuse.org/", category: "advanced"},
    { name: "Elementary OS", version: "7.1 x86_64", icon: "img/distro/elementary.png", downloadLink: "https://sgp1.dl.elementary.io/download/MTcyNDMyNDU1Ng==/elementaryos-7.1-stable.20230926rc.iso", description: "Beautiful and user-friendly, macOS-like interface.", websiteLink: "https://elementary.io/", category: "beginner"},
    { name: "Garuda Linux", version: "240428 x86_64", icon: "img/distro/garuda.svg", downloadLink: "https://iso.builds.garudalinux.org/iso/latest/garuda/gnome/latest.iso?r2=1", description: "High-performance Arch-based distribution.", websiteLink: "https://garudalinux.org/", category: "advanced"},
    { name: "Kali Linux", version: "2024.4 x86_64", icon: "img/distro/kali.svg", downloadLink: "https://cdimage.kali.org/kali-2024.4/kali-linux-2024.4-installer-amd64.iso", description: "Powerful toolkit for ethical hacking and security.", websiteLink: "https://www.kali.org/", category: "advanced"},
    { name: "Pardus", version: "23.2 x86_64", icon: "img/distro/pardus.png", downloadLink: "https://indir.pardus.org.tr/ISO/Pardus23/Pardus-23.2-GNOME-amd64.iso", description: "Turkish-based, user-friendly Linux distribution.", websiteLink: "https://pardus.org.tr/", category: "lightweight"},
    { name: "CachyOS", version: "241221 x86_64", icon: "img/distro/cachy.svg", downloadLink: "https://cdn77.cachyos.org/ISO/desktop/241221/cachyos-desktop-linux-241221.iso", description: "Arch-based, optimized distribution for security.", websiteLink: "https://cachyos.org/", category: "advanced"},
    { name: "Kubuntu", version: "24.04 LTS x86_64", icon: "img/distro/kubuntu.svg", downloadLink: "https://cdimage.ubuntu.com/kubuntu/releases/24.04/release/kubuntu-24.04.1-desktop-amd64.iso", description: "Ubuntu with KDE Plasma desktop environment.", websiteLink: "https://kubuntu.org/", category: "beginner"},
    { name: "KDE Neon", version: "20250202 x86_64", icon: "img/distro/neon.svg", downloadLink: "https://files.kde.org/neon/images/user/20250202-0745/neon-user-20250202-0745.iso", description: "Latest KDE software on Ubuntu base.", websiteLink: "https://neon.kde.org/", category: "beginner", videoLink: "https://www.youtube.com/watch?v=VylznS4qjfQ"},
    { name: "Slackware", version: "15.0 x86_64", icon: "img/distro/slackware.png", downloadLink: "https://mirrors.slackware.com/slackware/slackware-iso/slackware64-15.0-iso/slackware64-15.0-install-dvd.iso", description: "One of the oldest Linux distribution.", websiteLink: "http://www.slackware.com/", category: "advanced"},
    { name: "Puppy Linux", version: "10.0.7 x86_64", icon: "img/distro/puppy.png", downloadLink: "https://rockedge.org/kernels/data/ISO/Bookworm_Pup64/BookwormPup64_10.0.7.iso", description: "Lightweight and highly portable Linux distribution.", websiteLink: "https://puppylinux-woof-ce.github.io/", category: "lightweight"},
    { name: "NixOS", version: "24.05 x86_64", icon: "img/distro/nix.png", downloadLink: "https://channels.nixos.org/nixos-24.05/latest-nixos-gnome-x86_64-linux.iso", description: "Configurable Linux distribution.", websiteLink: "https://nixos.org/", category: "advanced"},
    { name: "Qubes OS", version: "4.2.2 x86_64", icon: "img/distro/qubes.svg", downloadLink: "https://mirrors.edge.kernel.org/qubes/iso/Qubes-R4.2.2-x86_64.iso", description: "Security through isolation using Xen virtualization.", websiteLink: "https://www.qubes-os.org/", category: "advanced"},
    { name: "Vanilla OS", version: "2.0 x86_64", icon: "img/distro/vanilla.svg", downloadLink: "https://download.vanillaos.org/latest.zip", description: "Minimalist Linux with a focus on simplicity.", websiteLink: "https://vanillaos.org/", category: "lightweight"},
    { name: "Alpine Linux", version: "3.21.0 Standart x86_64", icon: "img/distro/alpine.png", downloadLink: "https://dl-cdn.alpinelinux.org/alpine/v3.21/releases/x86_64/alpine-standard-3.21.0-x86_64.iso", description: "Lightweight & security-oriented Linux distribution.", websiteLink: "https://alpinelinux.org/", category: "lightweight"},
    { name: "Oracle Linux", version: "9.5 x86_64", icon: "img/distro/oracle.png", downloadLink: "https://yum.oracle.com/ISOS/OracleLinux/OL9/u5/x86_64/OracleLinux-R9-U5-x86_64-dvd.iso", description: "Enterprise Linux optimized for Oracle.", websiteLink: "https://www.oracle.com/linux/", category: "advanced"},
    { name: "SDesk", version: "2024.09.16 x86_64", icon: "img/distro/sdesk.png", downloadLink: "https://stevestudios.net/wp-content/uploads/2024/09/sdesk-2024.09.16-x86_64.iso", description: "A minimalist distribution.", websiteLink: "https://stevestudios.net/", category: "beginner"},
    { name: "Solus", version: "4.6 x86_64", icon: "img/distro/solus.png", downloadLink: "https://downloads.getsol.us/isos/2024-10-14/Solus-Budgie-Release-2024-10-14.iso", description: "A distribution that includes the Budgie desktop.", websiteLink: "https://getsol.us/", category: "beginner"},
    { name: "Pisi Linux", version: "2.4 x86_64", icon: "img/distro/pisi.png", downloadLink: "https://ftp.linux.org.tr/pisilinux/iso/kde/Pisi-Linux-2.4-KDE6-x86_64.iso", description: "A Turkish distro with its own package manager.", websiteLink: "https://pisilinux.org/", category: "lightweight"},
    { name: "deepin", version: "25 Preview x86_64", icon: "img/distro/deepin.svg", downloadLink: "https://cdimage.deepin.com/releases/25-preview/amd64/deepin-desktop-community-25-preview-amd64.iso", description: "A modern OS with a macOS-like deepin desktop.", websiteLink: "https://www.deepin.org/", category: "beginner"},
    { name: "Tails", version: "6.11 x86_64", icon: "img/distro/tails.svg", downloadLink: "https://download.tails.net/tails/stable/tails-amd64-6.11/tails-amd64-6.11.img", description: "A Debian-based distribution focused on privacy.", websiteLink: "https://tails.net/", category: "advanced"},
    { name: "RebornOS", version: "2024.07.27 x86_64", icon: "img/distro/reborn.svg", downloadLink: "https://cdn.soulharsh007.dev/RebornOS-ISO/rebornos_iso-2024.07.27-x86_64.iso", description: "A Arch-based distro. with customizable desktops.", websiteLink: "https://rebornos.org/", category: "advanced"},
    { name: "Peppermint OS", version: "Deb x86_64", icon: "img/distro/peppermint.svg", downloadLink: "https://mirror.ossplanet.net/peppermint/iso/XFCE/PeppermintOS-Debian-64.iso", description: "A lightweight, cloud-focused Linux distribution.", websiteLink: "https://peppermintos.com/", category: "lightweight"},
    { name: "Raspberry Pi OS", version: "2024-10-22 ARM64", icon: "img/distro/raspberry.svg", downloadLink: "https://downloads.raspberrypi.com/raspios_arm64/images/raspios_arm64-2024-10-28/2024-10-22-raspios-bookworm-arm64.img.xz", description: "An OS optimized for Raspberry Pi devices.", websiteLink: "https://www.raspberrypi.com/software/operating-systems/", category: "lightweight"},
    { name: "BunsenLabs", version: "240123 x86_64", icon: "img/distro/bunsenlabs.png", downloadLink: "https://ddl.bunsenlabs.org/ddl/boron-1-240123-amd64.hybrid.iso", description: "Lightweight, customizable, and minimalist Linux.", websiteLink: "https://www.bunsenlabs.org/", category: "lightweight"},
    { name: "Athena OS", version: "v23.11 x86_64", icon: "img/distro/athena.png", downloadLink: "https://github.com/Athena-OS/athena/releases/download/v23.11/athena-rolling-x86_64.iso", description: "Cybersecurity-focused, secure, and modern OS.", websiteLink: "https://athenaos.org/", category: "advanced"},
    { name: "PCLinuxOS", version: "2024.10 x86_64", icon: "img/distro/pclinuxos.svg", downloadLink: "https://ftp.nluug.nl/os/Linux/distr/pclinuxos/pclinuxos/iso/pclinuxos64-kde-2024.10.iso", description: "User-friendly and versatile Linux distribution.", websiteLink: "https://www.pclinuxos.com/", category: "beginner"},
    { name: "SteamFork", version: "20250204 x86_64", icon: "img/distro/steamfork.png", downloadLink: "https://www.steamfork.org/images/installer/steamfork-rel-latest-x86_64.iso", description: "SteamOS-based operating system.", websiteLink: "https://github.com/SteamFork", category: "beginner"},
    { name: "Aurora", version: "Stable x86_64", icon: "img/distro/aurora.svg", downloadLink: "https://dl.getaurora.dev/aurora-stable.iso", description: "Immutable Linux distribution.", websiteLink: "https://getaurora.dev/en", category: "advanced"},
];

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
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
        <div class="card h-100">
            <div class="card-img-container">
                <img src="${distro.icon}" class="card-img-top" alt="${distro.name} logo" loading="lazy">
            </div>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title"><strong>${distro.name}</strong> ${distro.videoLink ? '<a href="' + distro.videoLink + '" target="_blank" class="video-link"><i class="fab fa-youtube"></i></a>' : ''}</h5>
                <p class="card-text distro-version">
                    <strong><i class="fas fa-code-branch"></i> Version:</strong> ${distro.version}
                </p>
                <p class="card-text flex-grow-1">${distro.description}</p>
                <div class="mt-auto position-relative">
                    <a href="${distro.downloadLink}" class="btn btn-download w-100" rel="noopener noreferrer">
                        <i class="fas fa-download me-2"></i>Download
                    </a>
                </div>
            </div>
        </div>
    `;
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
        
        const matchesCategory = !currentFilter || distro.category === currentFilter;
        
        return matchesSearch && matchesCategory;
    });

    filteredDistros.forEach(distro => createDistroCard(distro, true));
}

distributions.forEach((distro, index, self) => {
    if (self.findIndex(t => t.name === distro.name) === index) createDistroCard(distro, true);
});

const disclaimerFooter = document.getElementById('disclaimer-footer');
const closeButton = document.querySelector('.close-button');
const searchContainer = document.querySelector('.search-container');
const githubLink = document.querySelector('.github-link');

gsap.from(searchContainer, {
    duration: 0.8,
    opacity: 0,
    y: 50,
    ease: "power3.out"
});

gsap.from(githubLink, {
    duration: 0.8,
    opacity: 0,
    y: 50,
    ease: "power3.out"
});

if (localStorage.getItem('disclaimerClosed') === 'true') {
    disclaimerFooter.style.display = 'none';
}

closeButton.addEventListener('click', () => {
    disclaimerFooter.style.display = 'none';
    localStorage.setItem('disclaimerClosed', 'true');
});

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
