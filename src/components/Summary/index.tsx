import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { priceFormatter } from "../../utils/formatter";
import { SummaryCard, SummaryContainer } from "./styles";
import { useSummary } from "../../hooks/useSumarry"

export function Summary() {
  const summary = useSummary();
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Input</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </ SummaryCard>

      <SummaryCard>
        <header>
          <span> Output</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>

    </SummaryContainer>
  )
}