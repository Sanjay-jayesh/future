const linePaths = [
    'M-120 130 C 160 30, 330 160, 570 92 S 920 40, 1190 142 S 1510 235, 1740 82',
    'M-140 155 C 150 55, 345 190, 585 118 S 940 62, 1205 168 S 1515 260, 1760 108',
    'M-120 180 C 145 82, 360 216, 602 143 S 958 86, 1224 194 S 1525 288, 1770 136',
    'M-90 206 C 170 110, 368 240, 615 170 S 974 111, 1242 220 S 1540 314, 1790 166',
    'M-70 234 C 190 138, 390 266, 635 198 S 990 138, 1260 248 S 1555 340, 1810 194',
    'M-40 262 C 208 168, 412 296, 658 226 S 1008 168, 1280 276 S 1580 366, 1830 222',
    'M-20 290 C 230 196, 430 322, 680 254 S 1030 196, 1300 304 S 1605 392, 1850 250',
    'M185 720 C 390 575, 560 610, 760 675 S 1090 820, 1310 682 S 1630 550, 1880 620',
    'M165 748 C 385 600, 560 638, 770 704 S 1104 850, 1328 710 S 1642 578, 1900 650',
    'M145 778 C 375 626, 565 666, 782 733 S 1114 880, 1345 740 S 1660 608, 1925 680',
    'M125 808 C 365 654, 570 694, 796 763 S 1128 910, 1362 770 S 1680 638, 1950 712',
    'M105 838 C 350 682, 580 724, 812 793 S 1145 940, 1380 800 S 1700 668, 1975 742',
    'M-110 550 C 85 424, 230 450, 390 530 S 660 680, 850 556 S 1120 410, 1330 484',
    'M-120 578 C 75 452, 220 478, 380 558 S 650 708, 840 584 S 1110 438, 1320 512',
    'M-130 606 C 65 480, 210 506, 370 586 S 640 736, 830 612 S 1100 466, 1310 540',
];

export function AnimatedLineSaver() {
    return (
        <div className="line-saver" aria-hidden="true">
            <svg viewBox="0 0 1660 900" preserveAspectRatio="none" role="presentation">
                <defs>
                    <linearGradient id="line-glow" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#ff2525" stopOpacity="0" />
                        <stop offset="0.4" stopColor="#ff4a4a" stopOpacity="0.9" />
                        <stop offset="0.7" stopColor="#ffb3a8" stopOpacity="0.8" />
                        <stop offset="1" stopColor="#ff2525" stopOpacity="0" />
                    </linearGradient>
                    <filter id="line-blur" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2.5" />
                    </filter>
                </defs>
                <g className="line-saver-blur" filter="url(#line-blur)">
                    {linePaths.map((path, index) => (
                        <path key={`blur-${index}`} d={path} pathLength="1" />
                    ))}
                </g>
                <g className="line-saver-sharp">
                    {linePaths.map((path, index) => (
                        <path key={`sharp-${index}`} d={path} pathLength="1" style={{ animationDelay: `${index * -0.85}s` }} />
                    ))}
                </g>
            </svg>
            <div className="line-saver-sheen" />
        </div>
    );
}
