import Header from '@/pages/SmallComponents/Header';
import { type PropsWithChildren } from 'react';

export default function PortfolioLayout({ children }: PropsWithChildren) {
    return (
        <div className="relative h-screen">
            <Header />
            <main className="relative">{children}</main>
        </div>
    );
}
