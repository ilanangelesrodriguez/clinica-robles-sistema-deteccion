import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function NotFound() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>404</h1>
          <p className="text-lg text-default-600">
            La página que estás buscando no existe.
          </p>
          <p>
            Estamos en desarrollo, por favor regresa más tarde.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}