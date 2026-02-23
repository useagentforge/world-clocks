type ClockTimeProps = {
  hours: number;
  minutes: number;
  seconds: number;
};

const CENTER = 50;
const RADIUS = 44;

function handCoords(angleDeg: number, length: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return {
    x: CENTER + length * Math.cos(rad),
    y: CENTER + length * Math.sin(rad),
  };
}

function HourMarkers() {
  return (
    <>
      {Array.from({ length: 12 }, (_, i) => {
        const angle = i * 30;
        const rad = (angle - 90) * (Math.PI / 180);
        const isQuarter = i % 3 === 0;
        const innerR = isQuarter ? 34 : 37;
        const outerR = 42;
        const x1 = CENTER + innerR * Math.cos(rad);
        const y1 = CENTER + innerR * Math.sin(rad);
        const x2 = CENTER + outerR * Math.cos(rad);
        const y2 = CENTER + outerR * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={isQuarter ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.25)"}
            strokeWidth={isQuarter ? 1.5 : 0.8}
            strokeLinecap="round"
          />
        );
      })}
    </>
  );
}

export function ClockTime({ hours, minutes, seconds }: ClockTimeProps) {
  // Smooth continuous angles — minutes/seconds drive fractional hour/minute positions
  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = (hours % 12) * 30 + minutes * 0.5;

  const hourTip = handCoords(hourAngle, 26);
  const minuteTip = handCoords(minuteAngle, 34);
  const secondTip = handCoords(secondAngle, 36);

  return (
    <div className="flex justify-center py-2" suppressHydrationWarning>
      <svg
        viewBox="0 0 100 100"
        className="w-40 h-40"
        aria-label="Analog clock"
        role="img"
      >
        {/* Face */}
        <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />

        {/* Hour markers */}
        <HourMarkers />

        {/* Hour hand */}
        <line
          x1={CENTER}
          y1={CENTER}
          x2={hourTip.x}
          y2={hourTip.y}
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Minute hand */}
        <line
          x1={CENTER}
          y1={CENTER}
          x2={minuteTip.x}
          y2={minuteTip.y}
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Second hand */}
        <line
          x1={CENTER}
          y1={CENTER}
          x2={secondTip.x}
          y2={secondTip.y}
          stroke="#f97316"
          strokeWidth="1"
          strokeLinecap="round"
        />

        {/* Centre dot */}
        <circle cx={CENTER} cy={CENTER} r="2.5" fill="white" />
        <circle cx={CENTER} cy={CENTER} r="1.2" fill="#f97316" />
      </svg>
    </div>
  );
}
