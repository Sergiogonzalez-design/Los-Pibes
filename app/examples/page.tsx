import ExamplesIndex from "@/components/examples/ExamplesIndex";
import OnixPageShell from "@/components/OnixPageShell";
import { getCountryFiltersForLocale, getExamplesForLocale } from "@/lib/examples-index";

export default function ExamplesIndexPage() {
  return (
    <OnixPageShell>
      <ExamplesIndex
        title="Examples of our work"
        viewLabel="View example →"
        examples={getExamplesForLocale("en")}
        countryFilters={getCountryFiltersForLocale("en")}
      />
    </OnixPageShell>
  );
}
