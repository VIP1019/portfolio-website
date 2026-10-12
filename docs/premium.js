/* Premium interactions layer — safe, progressive enhancement */
(function () {
    'use strict';
    document.documentElement.classList.add('js');
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function ready(fn) {
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
        else fn();
    }

    ready(function () {
        /* 1. Scroll progress bar */
        var bar = document.createElement('div');
        bar.id = 'scrollProgress';
        document.body.appendChild(bar);

        /* 2. Navbar state + progress */
        var navbar = document.querySelector('.navbar');
        function onScroll() {
            var h = document.documentElement;
            var max = h.scrollHeight - h.clientHeight;
            bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
            if (navbar) navbar.classList.toggle('scrolled', h.scrollTop > 20);
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        /* 3. Active nav link */
        var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
        document.querySelectorAll('.nav-menu a').forEach(function (a) {
            var href = (a.getAttribute('href') || '').split('/').pop().toLowerCase();
            if (href === page || (page === '' && href === 'index.html')) a.classList.add('active');
        });

        /* 4. Cursor spotlight (fine pointers only) */
        if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
            var glow = document.createElement('div');
            glow.className = 'cursor-glow';
            document.body.appendChild(glow);
            var gx = 0, gy = 0, tx = 0, ty = 0, raf = null;
            window.addEventListener('mousemove', function (e) {
                tx = e.clientX; ty = e.clientY; glow.classList.add('on');
                if (!raf) raf = requestAnimationFrame(loop);
            });
            document.addEventListener('mouseleave', function () { glow.classList.remove('on'); });
            function loop() {
                gx += (tx - gx) * 0.16; gy += (ty - gy) * 0.16;
                glow.style.transform = 'translate(' + gx + 'px,' + gy + 'px)';
                raf = (Math.abs(tx - gx) > 0.5 || Math.abs(ty - gy) > 0.5) ? requestAnimationFrame(loop) : null;
            }
        }

        /* 5. Card spotlight (mouse-follow glow) via delegation */
        var CARD_SEL = '.skill-category, .github-repo-card, .testimonial-card, .about-intro-card, .education-card, .recog-card, .project-card, .project-card-detail, .linkedin-project-card';
        document.addEventListener('mousemove', function (e) {
            var card = e.target.closest && e.target.closest(CARD_SEL);
            if (!card) return;
            var r = card.getBoundingClientRect();
            card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
            card.style.setProperty('--my', (e.clientY - r.top) + 'px');
        }, { passive: true });
        document.addEventListener('mouseout', function (e) {
            var card = e.target.closest && e.target.closest(CARD_SEL);
            if (card && !card.contains(e.relatedTarget)) {
                card.style.setProperty('--mx', '-400px');
                card.style.setProperty('--my', '-400px');
            }
        });

        /* 6. Scroll reveal */
        var revealTargets = document.querySelectorAll(
            '.section-title, .section-eyebrow, .skill-category, .recog-card, .about-intro-card, .education-card, ' +
            '.cta-section .section-container, .testimonials-wrapper, .hero-stat, .tech-marquee, .project-card-detail'
        );
        revealTargets.forEach(function (el, i) {
            el.classList.add('reveal');
            el.style.transitionDelay = ((i % 4) * 80) + 'ms';
        });
        if ('IntersectionObserver' in window) {
            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (en) {
                    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
            revealTargets.forEach(function (el) { io.observe(el); });
        } else {
            revealTargets.forEach(function (el) { el.classList.add('in'); });
        }

        /* GitHub cards render async — reveal them as they appear */
        var gh = document.getElementById('githubStats');
        if (gh && 'MutationObserver' in window) {
            new MutationObserver(function () {
                gh.querySelectorAll('.github-repo-card:not(.reveal)').forEach(function (c, i) {
                    c.classList.add('reveal');
                    c.style.transitionDelay = ((i % 6) * 60) + 'ms';
                    requestAnimationFrame(function () { c.classList.add('in'); });
                });
            }).observe(gh, { childList: true });
        }

        /* 7. Typed role line */
        var typed = document.querySelector('.hero-role .typed');
        if (typed) {
            var roles = ['Full-Stack Developer', 'Web3 & Blockchain Builder', 'IoT & AI Innovator', 'Competition Finalist & Innovator'];
            if (reduceMotion) { typed.textContent = roles[0]; }
            else {
                var ri = 0, ci = 0, del = false;
                (function tick() {
                    var word = roles[ri];
                    typed.textContent = word.substring(0, ci);
                    if (!del && ci < word.length) { ci++; setTimeout(tick, 65); }
                    else if (!del) { del = true; setTimeout(tick, 1700); }
                    else if (ci > 0) { ci--; setTimeout(tick, 32); }
                    else { del = false; ri = (ri + 1) % roles.length; setTimeout(tick, 300); }
                })();
            }
        }

        /* 8. Animated stat counters */
        var counters = document.querySelectorAll('[data-count]');
        if (counters.length && 'IntersectionObserver' in window) {
            var co = new IntersectionObserver(function (entries) {
                entries.forEach(function (en) {
                    if (!en.isIntersecting) return;
                    var el = en.target, target = parseInt(el.getAttribute('data-count'), 10), start = null;
                    var plus = el.getAttribute('data-plus') === 'true';
                    function step(ts) {
                        if (!start) start = ts;
                        var p = Math.min((ts - start) / 1400, 1);
                        var eased = 1 - Math.pow(1 - p, 3);
                        el.innerHTML = Math.round(target * eased) + (plus ? '<span class="plus">+</span>' : '');
                        if (p < 1) requestAnimationFrame(step);
                    }
                    requestAnimationFrame(step);
                    co.unobserve(el);
                });
            }, { threshold: 0.6 });
            counters.forEach(function (c) { co.observe(c); });
        }

        /* 9. Marquee: duplicate content for seamless loop */
        document.querySelectorAll('.marquee-track').forEach(function (track) {
            track.innerHTML += track.innerHTML;
        });
    });
})();
