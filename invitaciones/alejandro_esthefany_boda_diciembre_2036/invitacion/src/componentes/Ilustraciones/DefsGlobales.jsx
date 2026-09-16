// SVG oculto con recursos compartidos: clip-paths de borde ondulado (para las
// postales apiladas) y de recorte curvo (para fotos/ilustraciones), más el
// filtro de "pintura" usado para dar un aire de acuarela a los gráficos.
const DefsGlobales = () => (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
            {/* Borde ondulado suave — solo el canto superior, para las secciones
                que se apilan unas sobre otras */}
            <clipPath id="borde-rasgado" clipPathUnits="objectBoundingBox">
                <path d="
                    M0,0
                    C 0.05,0.07 0.12,0.07 0.1667,0
                    C 0.2167,0.07 0.2833,0.07 0.3333,0
                    C 0.3833,0.07 0.45,0.07 0.5,0
                    C 0.55,0.07 0.6167,0.07 0.6667,0
                    C 0.7167,0.07 0.7833,0.07 0.8333,0
                    C 0.8833,0.07 0.95,0.07 1,0
                    L1,1 L0,1 Z
                " />
            </clipPath>

            {/* Recorte curvo en los cuatro lados, tipo mancha de acuarela, para
                enmarcar fotos/ilustraciones sin esquinas rectas */}
            <clipPath id="recorte-tijeras" clipPathUnits="objectBoundingBox">
                <path d="
                    M0,0.06
                    C 0.03,0 0.09,0 0.12,0.045
                    C 0.16,-0.02 0.24,-0.02 0.28,0.045
                    C 0.32,0 0.38,0 0.41,0.05
                    C 0.46,-0.02 0.54,-0.02 0.59,0.05
                    C 0.62,0 0.68,0 0.72,0.045
                    C 0.76,-0.02 0.84,-0.02 0.88,0.045
                    C 0.91,0 0.97,0 1,0.06
                    C 0.94,0.1 0.94,0.16 1,0.2
                    C 1.03,0.26 1.03,0.34 1,0.4
                    C 0.94,0.44 0.94,0.5 1,0.55
                    C 1.03,0.6 1.03,0.68 1,0.72
                    C 0.94,0.76 0.94,0.84 1,0.88
                    C 1.03,0.92 1,0.97 0.94,1
                    C 0.9,0.97 0.84,0.97 0.8,1
                    C 0.76,0.97 0.68,0.97 0.64,1
                    C 0.6,0.97 0.52,0.97 0.48,1
                    C 0.44,0.97 0.36,0.97 0.32,1
                    C 0.28,0.97 0.2,0.97 0.16,1
                    C 0.12,0.97 0.06,0.97 0.02,1
                    C -0.01,0.96 -0.01,0.9 0.02,0.86
                    C -0.02,0.82 -0.02,0.74 0.02,0.7
                    C -0.01,0.66 -0.01,0.58 0.02,0.54
                    C -0.02,0.5 -0.02,0.42 0.02,0.38
                    C -0.01,0.34 -0.01,0.26 0.02,0.22
                    C -0.02,0.18 -0.02,0.1 0,0.06
                    Z
                " />
            </clipPath>

            {/* Filtro "pintura" — deforma ligeramente los bordes de un gráfico
                para que no luzca tan perfecto/vectorial, como pintado a mano */}
            <filter id="acuarela-borde" x="-25%" y="-25%" width="150%" height="150%">
                <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed="7" result="ruido" />
                <feDisplacementMap in="SourceGraphic" in2="ruido" scale="7" xChannelSelector="R" yChannelSelector="G" />
            </filter>
        </defs>
    </svg>
)

export default DefsGlobales
