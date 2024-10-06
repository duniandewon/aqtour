interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

export function Globe({
  width = "17",
  height = "17",
  fill = "#FFB800",
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 1.72656C7.16034 1.72656 5.85077 2.12382 4.73688 2.86809C3.623 3.61237 2.75483 4.67023 2.24216 5.90792C1.7295 7.1456 1.59536 8.50751 1.85672 9.82143C2.11807 11.1354 2.76318 12.3423 3.71046 13.2895C4.65774 14.2368 5.86465 14.8819 7.17857 15.1433C8.49249 15.4046 9.8544 15.2705 11.0921 14.7578C12.3298 14.2452 13.3876 13.377 14.1319 12.2631C14.8762 11.1492 15.2734 9.83966 15.2734 8.5C15.2713 6.70422 14.557 4.98259 13.2872 3.71279C12.0174 2.44298 10.2958 1.72867 8.5 1.72656ZM13.9168 5.97656H11.2353C10.9156 4.74466 10.3327 3.5967 9.52664 2.61176C10.4748 2.77894 11.3687 3.17199 12.1329 3.75767C12.897 4.34335 13.5089 5.10444 13.9168 5.97656ZM14.4766 8.5C14.477 9.08489 14.3913 9.66665 14.2222 10.2266H11.4093C11.6032 9.08369 11.6032 7.91631 11.4093 6.77344H14.2222C14.3913 7.33335 14.477 7.91511 14.4766 8.5ZM8.5 14.3325C8.11638 13.9411 7.77802 13.5079 7.49129 13.0409C7.10433 12.4115 6.8037 11.7329 6.59746 11.0234H10.4025C10.1963 11.7329 9.89567 12.4115 9.50871 13.0409C9.22199 13.5079 8.88362 13.9411 8.5 14.3325ZM6.40489 10.2266C6.18798 9.08574 6.18798 7.91426 6.40489 6.77344H10.5951C10.812 7.91426 10.812 9.08574 10.5951 10.2266H6.40489ZM2.52344 8.5C2.52299 7.91511 2.60869 7.33335 2.77778 6.77344H5.59075C5.3968 7.91631 5.3968 9.08369 5.59075 10.2266H2.77778C2.60869 9.66665 2.52299 9.08489 2.52344 8.5ZM8.5 2.66754C8.88362 3.05887 9.22199 3.49213 9.50871 3.95914C9.89567 4.58854 10.1963 5.26709 10.4025 5.97656H6.59746C6.8037 5.26709 7.10433 4.58854 7.49129 3.95914C7.77802 3.49213 8.11638 3.05887 8.5 2.66754ZM7.47336 2.61176C6.66734 3.5967 6.08441 4.74466 5.76473 5.97656H3.08325C3.49109 5.10444 4.10296 4.34335 4.86711 3.75767C5.63126 3.17199 6.52521 2.77894 7.47336 2.61176ZM3.08325 11.0234H5.76473C6.08441 12.2553 6.66734 13.4033 7.47336 14.3882C6.52521 14.2211 5.63126 13.828 4.86711 13.2423C4.10296 12.6566 3.49109 11.8956 3.08325 11.0234ZM9.52465 14.3882C10.3314 13.4035 10.915 12.2555 11.2353 11.0234H13.9168C13.5089 11.8956 12.897 12.6566 12.1329 13.2423C11.3687 13.828 10.4748 14.2211 9.52664 14.3882H9.52465Z"
        fill={fill}
      />
    </svg>
  );
}
