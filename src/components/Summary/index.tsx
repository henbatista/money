import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Input</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>$ 17,400.00</strong>
      </ SummaryCard>

      <SummaryCard>
        <header>
          <span> Output</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>$ 17,400.00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>
        <strong>$ 17,400.00</strong>
      </SummaryCard>

    </SummaryContainer>
  )
}