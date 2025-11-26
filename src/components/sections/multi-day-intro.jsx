import { ExternalLink } from 'lucide-react';

const MultiDayIntro = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-black mb-6">Varios Días</h2>
      <div className="mb-8 text-center">
        <a
          href="https://www.nahuelhuapi.gov.ar/trekking.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-semibold uppercase text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          FORMULARIO REGISTRO PARQUE NACIONAL
          <ExternalLink className="h-4 w-4" />
        </a>
        <p className="mt-2 text-sm font-semibold text-destructive">
          Es obligatorio llenar el formulario de registro en el parque antes de ir al refugio, ante cualquier emergencia.
        </p>
      </div>
    </>
  );
};

export default MultiDayIntro;