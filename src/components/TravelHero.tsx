import type {ReactNode} from 'react';

type Props = {
  title: string; subtitle: string; photo: string; alt: string;
  children: ReactNode; breadcrumb?: ReactNode;
};
export default function TravelHero({title,subtitle,photo,alt,children,breadcrumb}:Props) {
  return <section className="relative isolate flex min-h-[78svh] sm:min-h-[82vh] items-end overflow-hidden">
    <img src={photo} alt={alt} fetchPriority="high" loading="eager" className="absolute inset-0 h-full w-full object-cover"/>
    <div aria-hidden="true" className="absolute inset-0" style={{background:'linear-gradient(180deg,rgba(0,0,0,.4) 0%,rgba(0,0,0,.13) 26%,rgba(0,0,0,.79) 80%,rgba(0,0,0,.9) 100%)'}}/>
    <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-28 text-white sm:px-6 sm:pb-20">
      <div className="max-w-4xl">{breadcrumb}
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white sm:text-xl">{subtitle}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold">{children}</div>
      </div>
    </div>
  </section>;
}
