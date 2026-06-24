import ExamplesIndex from "@/components/examples/ExamplesIndex";
import LosPibesFooterES from "@/components/LosPibesFooterES";
import LosPibesNavbarES from "@/components/LosPibesNavbarES";
import { getCountryFiltersForLocale, getExamplesForLocale } from "@/lib/examples-index";

export default function ExamplesIndexPageES() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbarES backHref="/es" />
      <ExamplesIndex
        title="Ejemplos de nuestro trabajo"
        viewLabel="Ver ejemplo →"
        examples={getExamplesForLocale("es")}
        countryFilters={getCountryFiltersForLocale("es")}
      />
      <LosPibesFooterES />
    </div>
  );
}
