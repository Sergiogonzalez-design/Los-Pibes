import ExamplesIndex from "@/components/examples/ExamplesIndex";
import LosPibesFooterEN from "@/components/LosPibesFooterEN";
import LosPibesNavbarEN from "@/components/LosPibesNavbarEN";
import { getCountryFiltersForLocale, getExamplesForLocale } from "@/lib/examples-index";

export default function ExamplesIndexPageEN() {
  return (
    <div className="min-h-screen bg-background">
      <LosPibesNavbarEN backHref="/en" />
      <ExamplesIndex
        title="Examples of our work"
        viewLabel="View example →"
        examples={getExamplesForLocale("en")}
        countryFilters={getCountryFiltersForLocale("en")}
      />
      <LosPibesFooterEN />
    </div>
  );
}
