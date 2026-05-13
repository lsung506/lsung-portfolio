import heroAvatar from '../assets/images/avatar.jpg';
import heroBackground from '../assets/images/hero.webp';
import logoUrl from '../assets/images/logo.svg?url';
import defaultSocial from '../assets/images/ovidius-preview.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    logo: {
        src: logoUrl,
        alt: 'Ovidius logo'
    },
    title: 'Lsung',
    description: 'Astro.js and Tailwind CSS theme for blogging by justgoodui.com',
    image: {
        src: defaultSocial,
        alt: 'Ovidius - Astro.js and Tailwind CSS theme'
    },
    primaryNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Download Theme',
            href: 'https://github.com/JustGoodUI/ovidius-astro-theme'
        }
    ],
    secondaryNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Terms of Service',
            href: '/terms'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Download Theme',
            href: 'https://github.com/JustGoodUI/ovidius-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Follow on Instagram',
            href: 'https://www.instagram.com/lsung90/',
            icon: 'instagram'
        }
    ],
    hero: {
        title: '임성민',
        text: "안녕하세요, 끊임없이 성장하는 웹퍼블리셔 임성민입니다. 저는 사용자를 위한 직관적이고 즐거운 웹 경험을 만드는 일에 열정을 가지고 있습니다. 새로운 기술을 배우고, 그것으로 문제를 해결하는 과정에서 큰 보람을 느낍니다",
        avatar: {
            src: heroAvatar,
            alt: 'Justin Case'
        },
        backgroundImage: {
            src: heroBackground
        }
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Ovidius Newsletter',
        text: 'One update per week. All the latest news directly in your inbox.',
        form: {
            action: 'https://justgoodthemes.us3.list-manage.com/subscribe/post?u=78f1bab16028354caeb23aecd&amp;id=4a7330d117&amp;f_id=005c48e2f0',
            emailFieldName: 'EMAIL',
            honeypotFieldName: 'b_78f1bab16028354caeb23aecd_4a7330d117'
        }
    },
    postsPerPage: 5
};

export default siteConfig;
