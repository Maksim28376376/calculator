// A parametrized, full-body 2D anime-style fighter, drawn entirely in SVG.
// Every fighter reuses one athletic base pose (a fighting guard) and is
// differentiated by skin tone, hair, facial hair, national trunk colors,
// glove color, and an optional headband — so each country's champion reads
// as its own character without needing bitmap art.

export type HairStyle =
  | "short"
  | "buzz"
  | "bald"
  | "spiky"
  | "slick"
  | "cornrows"
  | "curly"
  | "afro"
  | "ponytail"
  | "long"
  | "topknot"
  | "mohawk"
  | "papakha"
  | "mullet";

export type FacialHair =
  | "none"
  | "stubble"
  | "goatee"
  | "beard"
  | "fullbeard"
  | "mustache";

export type FighterLook = {
  skin: string;
  hair: string;
  hairStyle: HairStyle;
  facial: FacialHair;
  trunks: string;
  trunksAccent: string;
  gloves: string;
  headband?: string;
  female?: boolean;
};

const OUTLINE = "#20191b";
const SHADOW = "rgba(0,0,0,0.13)";

function Hair({ style, color }: { style: HairStyle; color: string }) {
  const s = { fill: color, stroke: OUTLINE, strokeWidth: 3 } as const;
  switch (style) {
    case "bald":
      return null;
    case "buzz":
      return (
        <path
          d="M92 96 Q130 60 168 96 Q168 84 130 74 Q92 84 92 96 Z"
          fill={color}
          opacity={0.85}
        />
      );
    case "short":
      return (
        <path
          d="M88 112 Q84 62 130 58 Q176 62 172 112 Q170 92 150 86 Q150 74 130 74 Q110 74 110 86 Q90 92 88 112 Z"
          {...s}
        />
      );
    case "slick":
      return (
        <path
          d="M90 104 Q86 64 130 60 Q174 64 170 104 Q166 82 130 80 Q120 80 116 88 Q104 86 90 104 Z"
          {...s}
        />
      );
    case "spiky":
      return (
        <path
          d="M86 108 L96 74 L106 96 L118 66 L128 92 L138 64 L150 94 L162 72 L172 108 Q168 84 130 80 Q92 84 86 108 Z"
          {...s}
        />
      );
    case "mohawk":
      return (
        <>
          <path d="M92 104 Q96 92 108 90 L108 104 Z" {...s} />
          <path d="M168 104 Q164 92 152 90 L152 104 Z" {...s} />
          <path d="M120 100 L120 44 Q130 40 140 44 L140 100 Z" {...s} />
        </>
      );
    case "curly":
      return (
        <path
          d="M86 106 Q80 66 108 60 Q118 50 130 58 Q142 50 152 60 Q180 66 174 106 Q176 88 162 88 Q166 76 152 78 Q152 66 138 72 Q130 62 122 72 Q108 66 108 78 Q94 76 98 88 Q84 88 86 106 Z"
          {...s}
        />
      );
    case "afro":
      return (
        <ellipse cx={130} cy={80} rx={54} ry={44} fill={color} stroke={OUTLINE} strokeWidth={3} />
      );
    case "cornrows":
      return (
        <>
          <path d="M90 108 Q88 64 130 60 Q172 64 170 108 Q168 90 130 86 Q92 90 90 108 Z" {...s} />
          {[102, 114, 126, 138, 150, 158].map((x, i) => (
            <line key={i} x1={x} y1={70} x2={x} y2={104} stroke={OUTLINE} strokeWidth={2} opacity={0.5} />
          ))}
        </>
      );
    case "ponytail":
      return (
        <>
          <path d="M168 96 Q196 110 190 150 Q184 168 176 160 Q186 130 166 112 Z" {...s} />
          <path d="M90 106 Q86 62 130 58 Q174 62 172 106 Q168 86 130 82 Q92 86 90 106 Z" {...s} />
        </>
      );
    case "topknot":
      return (
        <>
          <path d="M92 106 Q90 70 130 66 Q170 70 168 106 Q164 92 130 90 Q96 92 92 106 Z" {...s} />
          <ellipse cx={130} cy={54} rx={13} ry={11} {...s} />
        </>
      );
    case "long":
      return (
        <>
          <path d="M80 108 Q72 210 92 250 L108 246 Q94 170 100 108 Z" {...s} />
          <path d="M180 108 Q188 210 168 250 L152 246 Q166 170 160 108 Z" {...s} />
          <path d="M86 110 Q82 60 130 56 Q178 60 174 110 Q170 86 130 82 Q90 86 86 110 Z" {...s} />
        </>
      );
    case "mullet":
      return (
        <>
          <path d="M92 108 Q100 150 112 170 L120 166 Q112 130 114 108 Z" {...s} />
          <path d="M168 108 Q160 150 148 170 L140 166 Q148 130 146 108 Z" {...s} />
          <path d="M90 104 Q88 66 130 62 Q172 66 170 104 Q166 86 130 82 Q94 86 90 104 Z" {...s} />
        </>
      );
    case "papakha":
      // Dagestani-style fur hat.
      return (
        <path
          d="M84 92 Q84 52 130 50 Q176 52 176 92 Q176 100 168 100 Q166 84 130 82 Q94 84 92 100 Q84 100 84 92 Z"
          fill="#e9e6df"
          stroke={OUTLINE}
          strokeWidth={3}
        />
      );
  }
}

function Facial({ type, color }: { type: FacialHair; color: string }) {
  const s = { fill: color, stroke: OUTLINE, strokeWidth: 2 } as const;
  switch (type) {
    case "none":
      return null;
    case "stubble":
      return (
        <path
          d="M100 138 Q104 168 130 172 Q156 168 160 138 Q150 156 130 156 Q110 156 100 138 Z"
          fill={color}
          opacity={0.35}
        />
      );
    case "goatee":
      return <path d="M120 150 Q130 168 140 150 Q136 160 130 160 Q124 160 120 150 Z" {...s} />;
    case "mustache":
      return <path d="M114 140 Q130 148 146 140 Q130 144 114 140 Z" {...s} />;
    case "beard":
      return (
        <path
          d="M98 132 Q100 172 130 178 Q160 172 162 132 Q158 158 130 162 Q102 158 98 132 Z"
          {...s}
        />
      );
    case "fullbeard":
      return (
        <path
          d="M94 122 Q92 180 130 190 Q168 180 166 122 Q168 150 150 158 Q152 168 130 170 Q108 168 110 158 Q92 150 94 122 Z"
          {...s}
        />
      );
  }
}

export default function FighterAvatar({
  look,
  className,
}: {
  look: FighterLook;
  className?: string;
}) {
  const {
    skin,
    hair,
    hairStyle,
    facial,
    trunks,
    trunksAccent,
    gloves,
    headband,
    female,
  } = look;

  return (
    <svg
      viewBox="0 0 260 560"
      className={className}
      role="img"
      aria-label="Anime-style fighter illustration"
    >
      {/* soft ground shadow */}
      <ellipse cx={130} cy={540} rx={78} ry={12} fill="rgba(0,0,0,0.28)" />

      {/* back hair (long styles render behind the body) */}
      {(hairStyle === "long" || hairStyle === "ponytail") && (
        <Hair style={hairStyle} color={hair} />
      )}

      {/* legs */}
      <g strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M114 356 L108 516" stroke={OUTLINE} strokeWidth={36} />
        <path d="M146 356 L152 516" stroke={OUTLINE} strokeWidth={36} />
        <path d="M114 356 L108 516" stroke={skin} strokeWidth={30} />
        <path d="M146 356 L152 516" stroke={skin} strokeWidth={30} />
      </g>
      {/* feet */}
      <ellipse cx={102} cy={524} rx={20} ry={11} fill={skin} stroke={OUTLINE} strokeWidth={3} />
      <ellipse cx={158} cy={524} rx={20} ry={11} fill={skin} stroke={OUTLINE} strokeWidth={3} />

      {/* shorts */}
      <path
        d="M84 300 L176 300 L182 372 Q158 384 146 372 Q130 360 114 372 Q102 384 78 372 Z"
        fill={trunks}
        stroke={OUTLINE}
        strokeWidth={3}
      />
      <rect x={82} y={300} width={96} height={13} rx={3} fill={trunksAccent} stroke={OUTLINE} strokeWidth={2} />
      <path d="M84 316 L96 316 L100 368 L86 372 Z" fill={trunksAccent} opacity={0.9} />

      {/* torso */}
      <path
        d="M78 188 Q130 176 182 188 L168 300 Q130 292 92 300 Z"
        fill={skin}
        stroke={OUTLINE}
        strokeWidth={3}
      />
      {/* torso shading: pecs (male) or a sports top (female) + abs suggestion */}
      {female ? (
        <>
          <path
            d="M84 198 Q130 190 176 198 L172 228 Q130 238 88 228 Z"
            fill={trunks}
            stroke={OUTLINE}
            strokeWidth={3}
          />
          <path d="M90 226 Q130 234 170 226" fill="none" stroke={trunksAccent} strokeWidth={3} />
          <line x1={104} y1={196} x2={112} y2={182} stroke={OUTLINE} strokeWidth={3} strokeLinecap="round" />
          <line x1={156} y1={196} x2={148} y2={182} stroke={OUTLINE} strokeWidth={3} strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M100 214 Q118 230 128 214" fill="none" stroke={SHADOW} strokeWidth={4} />
          <path d="M160 214 Q142 230 132 214" fill="none" stroke={SHADOW} strokeWidth={4} />
        </>
      )}
      <line x1={130} y1={female ? 242 : 230} x2={130} y2={286} stroke={SHADOW} strokeWidth={3} />
      <line x1={114} y1={256} x2={146} y2={256} stroke={SHADOW} strokeWidth={3} />
      <line x1={116} y1={272} x2={144} y2={272} stroke={SHADOW} strokeWidth={3} />

      {/* neck */}
      <path d="M116 150 L144 150 L146 176 Q130 184 114 176 Z" fill={skin} stroke={OUTLINE} strokeWidth={3} />
      <path d="M116 168 Q130 178 144 168 L146 176 Q130 184 114 176 Z" fill={SHADOW} />

      {/* head */}
      <ellipse cx={130} cy={118} rx={40} ry={46} fill={skin} stroke={OUTLINE} strokeWidth={3} />
      <ellipse cx={88} cy={122} rx={7} ry={11} fill={skin} stroke={OUTLINE} strokeWidth={3} />
      <ellipse cx={172} cy={122} rx={7} ry={11} fill={skin} stroke={OUTLINE} strokeWidth={3} />

      {/* face: anime eyes */}
      <g>
        {/* brows */}
        <path d="M104 104 Q114 100 124 104" fill="none" stroke={OUTLINE} strokeWidth={3} strokeLinecap="round" />
        <path d="M136 104 Q146 100 156 104" fill="none" stroke={OUTLINE} strokeWidth={3} strokeLinecap="round" />
        {/* eye whites */}
        <ellipse cx={114} cy={120} rx={9} ry={12} fill="#fff" stroke={OUTLINE} strokeWidth={2.5} />
        <ellipse cx={146} cy={120} rx={9} ry={12} fill="#fff" stroke={OUTLINE} strokeWidth={2.5} />
        {/* irises */}
        <circle cx={115} cy={122} r={6} fill={hair === "#111318" ? "#3a2a1a" : "#4a3326"} />
        <circle cx={145} cy={122} r={6} fill={hair === "#111318" ? "#3a2a1a" : "#4a3326"} />
        <circle cx={113} cy={119} r={2.2} fill="#fff" />
        <circle cx={143} cy={119} r={2.2} fill="#fff" />
        {/* upper lash line */}
        <path d="M105 116 Q114 108 123 116" fill="none" stroke={OUTLINE} strokeWidth={3} strokeLinecap="round" />
        <path d="M137 116 Q146 108 155 116" fill="none" stroke={OUTLINE} strokeWidth={3} strokeLinecap="round" />
        {/* nose + mouth */}
        <path d="M129 128 L126 138 Q130 140 134 138" fill="none" stroke={OUTLINE} strokeWidth={2} strokeLinecap="round" />
        <path d="M120 148 Q130 154 140 148" fill="none" stroke={OUTLINE} strokeWidth={2.5} strokeLinecap="round" />
      </g>

      {/* facial hair (under front hair, over face) */}
      <Facial type={facial} color={hair} />

      {/* front hair */}
      {hairStyle !== "long" && hairStyle !== "ponytail" && (
        <Hair style={hairStyle} color={hair} />
      )}
      {(hairStyle === "long" || hairStyle === "ponytail") && (
        <path
          d="M86 110 Q82 60 130 56 Q178 60 174 110 Q170 86 130 82 Q90 86 86 110 Z"
          fill={hair}
          stroke={OUTLINE}
          strokeWidth={3}
        />
      )}

      {/* headband */}
      {headband && (
        <>
          <rect x={88} y={94} width={84} height={12} rx={3} fill={headband} stroke={OUTLINE} strokeWidth={2.5} />
          <path d="M172 100 L188 92 L186 104 Z" fill={headband} stroke={OUTLINE} strokeWidth={2.5} />
        </>
      )}

      {/* arms bent into a fists-up guard, drawn on top */}
      <g strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M82 196 L64 242 L112 182" stroke={OUTLINE} strokeWidth={32} />
        <path d="M178 196 L196 242 L148 182" stroke={OUTLINE} strokeWidth={32} />
        <path d="M82 196 L64 242 L112 182" stroke={skin} strokeWidth={26} />
        <path d="M178 196 L196 242 L148 182" stroke={skin} strokeWidth={26} />
      </g>
      {/* gloves held in front, at chin height */}
      <g>
        <ellipse cx={112} cy={184} rx={18} ry={20} fill={gloves} stroke={OUTLINE} strokeWidth={3} />
        <ellipse cx={148} cy={184} rx={18} ry={20} fill={gloves} stroke={OUTLINE} strokeWidth={3} />
        <path d="M104 182 Q112 188 120 182" fill="none" stroke={OUTLINE} strokeWidth={2} />
        <path d="M140 182 Q148 188 156 182" fill="none" stroke={OUTLINE} strokeWidth={2} />
        <path d="M112 174 Q112 168 118 168" fill="none" stroke={OUTLINE} strokeWidth={2} opacity={0.6} />
      </g>
    </svg>
  );
}
