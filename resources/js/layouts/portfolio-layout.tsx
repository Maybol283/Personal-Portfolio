import Header from '@/pages/SmallComponents/Header';
import { type PropsWithChildren } from 'react';

export default function PortfolioLayout({ children }: PropsWithChildren) {
    return (
        <div className="relative h-screen">
           
            <main className="h-screen">{children}</main>
        </div>
    );
}
