import { ReactNode } from 'react';

type PropsWithChildren<T> = T & { children?: ReactNode };

type ParentFC<T = {}> = React.FC<PropsWithChildren<T>>;

export type { ParentFC };
