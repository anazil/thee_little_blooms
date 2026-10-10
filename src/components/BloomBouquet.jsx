const PETAL_PATH = 'M0,-5 C17,-19 20,-48 0,-62 C-20,-48 -17,-19 0,-5 Z'

const ARRANGEMENTS = {
  2: {
    stems: [
      'M106,120 C105,160 120,175 114,206',
      'M62,152 C66,174 86,184 100,206',
    ],
    leaves: [
      'M110,152 C128,144 136,150 144,160 C126,164 114,162 110,152 Z',
      'M82,170 C68,164 60,168 54,178 C70,182 80,180 82,170 Z',
    ],
    flowers: [
      { x: 106, y: 76, s: 1, r: 0, p: 6 },
      { x: 62, y: 114, s: 0.66, r: -24, p: 5 },
    ],
    wrap: 'M55,240 L165,240 L140,168 L80,168 Z',
    wrapFold: 'M80,168 L120,240 L140,168 Z',
  },
  4: {
    stems: [
      'M88,130 C90,170 98,190 104,208',
      'M146,150 C140,178 128,192 120,206',
      'M50,150 C60,180 84,196 96,208',
      'M116,165 C115,185 113,198 112,208',
    ],
    leaves: [
      'M92,152 C110,144 118,150 126,160 C108,164 96,162 92,152 Z',
      'M78,170 C62,164 54,168 48,178 C64,182 74,180 78,170 Z',
      'M118,158 C134,152 142,156 150,164 C132,170 122,166 118,158 Z',
    ],
    flowers: [
      { x: 88, y: 80, s: 1, r: 0, p: 6 },
      { x: 146, y: 104, s: 0.8, r: 16, p: 6 },
      { x: 50, y: 112, s: 0.7, r: -18, p: 5 },
      { x: 116, y: 138, s: 0.55, r: 12, p: 5 },
    ],
    wrap: 'M45,240 L180,240 L152,168 L68,168 Z',
    wrapFold: 'M68,168 L110,240 L152,168 Z',
  },
  6: {
    stems: [
      'M86,128 C88,168 100,192 106,206',
      'M140,150 C134,180 126,194 122,206',
      'M52,150 C62,182 84,198 96,208',
      'M108,150 C109,172 110,190 110,206',
      'M66,160 C74,184 92,200 100,208',
      'M150,155 C142,180 132,194 124,206',
    ],
    leaves: [
      'M90,148 C108,140 116,146 124,156 C106,160 94,158 90,148 Z',
      'M76,166 C60,160 52,164 46,174 C62,178 72,176 76,166 Z',
      'M122,158 C138,152 146,156 154,164 C136,170 126,166 122,158 Z',
    ],
    flowers: [
      { x: 86, y: 76, s: 1, r: 0, p: 6 },
      { x: 140, y: 100, s: 0.82, r: 18, p: 6 },
      { x: 52, y: 102, s: 0.8, r: -18, p: 6 },
      { x: 108, y: 124, s: 0.6, r: 6, p: 5 },
      { x: 66, y: 140, s: 0.5, r: -12, p: 5 },
      { x: 150, y: 130, s: 0.52, r: 14, p: 5 },
    ],
    wrap: 'M40,240 L185,240 L156,166 L64,166 Z',
    wrapFold: 'M64,166 L112,240 L156,166 Z',
  },
}

function Flower({ petalCount, centerR, inside, outline }) {
  return (
    <g>
      {Array.from({ length: petalCount }).map((_, index) => (
        <path
          key={index}
          d={PETAL_PATH}
          fill={outline}
          opacity="0.95"
          transform={`rotate(${(360 / petalCount) * index})`}
        />
      ))}
      <circle r={centerR} fill={inside} stroke={outline} strokeWidth="3" />
      <circle r={centerR * 0.34} fill="#FFF8FB" />
    </g>
  )
}

export default function BloomBouquet({ flowers, inside, outline, className }) {
  const arrangement = ARRANGEMENTS[flowers] || ARRANGEMENTS[2]

  return (
    <svg
      className={className}
      viewBox="0 0 220 240"
      role="img"
      aria-label={`Preview of your ${flowers}-flower bloom`}
    >
      {arrangement.stems.map((d) => (
        <path key={d} className="bloom-preview-stem" d={d} />
      ))}

      {arrangement.leaves.map((d) => (
        <path key={d} className="bloom-preview-leaf" d={d} />
      ))}

      {arrangement.flowers.map((flower) => (
        <g
          key={`${flower.x}-${flower.y}`}
          transform={`translate(${flower.x} ${flower.y}) rotate(${flower.r}) scale(${flower.s})`}
        >
          <Flower
            petalCount={flower.p}
            centerR={14}
            inside={inside}
            outline={outline}
          />
        </g>
      ))}

      <path className="bloom-preview-wrap" d={arrangement.wrap} />
      <path className="bloom-preview-wrap-fold" d={arrangement.wrapFold} />
    </svg>
  )
}
