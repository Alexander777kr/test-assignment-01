import { ReactNode } from 'react';
import { NumberOfHeadings } from '../../utils/types';

interface HeadingProps {
  level?: NumberOfHeadings;
  children: ReactNode;
  className?: string;
}

const Heading = ({
  level = '1',
  children,
  className,
  ...props
}: HeadingProps) => {
  const Titles = {
    '1': (
      <h1 className={className} {...props}>
        {children}
      </h1>
    ),
    '2': (
      <h2 className={className} {...props}>
        {children}
      </h2>
    ),
    '3': (
      <h3 className={className} {...props}>
        {children}
      </h3>
    ),
    '4': (
      <h4 className={className} {...props}>
        {children}
      </h4>
    ),
    '5': (
      <h5 className={className} {...props}>
        {children}
      </h5>
    ),
    '6': (
      <h6 className={className} {...props}>
        {children}
      </h6>
    ),
  };

  return Titles[level];
};

export default Heading;
