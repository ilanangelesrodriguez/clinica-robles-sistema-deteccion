import PredictionForm from "@/components/prediction/predictionForm";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-4">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Breast Cancer Predictor</h1>
          <PredictionForm />
        </div>
      </section>
    </DefaultLayout>
  );
}
