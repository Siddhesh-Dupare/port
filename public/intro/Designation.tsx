
type DesignationProps = {
  designationName: string;
}

export default function Designation({ designationName }: DesignationProps ) {
  return (
    <svg
      viewBox="0 0 750 130"
      className="block h-auto w-full max-w-177.5 font-bold select-none"
      aria-label={designationName}
      role="img"
    >
      <text
        x="0"
        y="0"
        dominantBaseline="hanging"
        fontSize="150"
        fill="currentColor"
      >
        {designationName}
      </text>
    </svg>
  );
}
