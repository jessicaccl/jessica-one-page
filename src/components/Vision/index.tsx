import { Fragment } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  VisionContainer,
  SectionTitle,
  FlowWrapper,
  FlowNode,
  ArrowConnector
} from './styles';

export function Vision() {
  const flowSteps = [
    { title: "Usuário", desc: "Empatia e contexto", highlight: false },
    { title: "Problema", desc: "A verdadeira dor", highlight: false },
    { title: "Solução", desc: "Hipótese de valor", highlight: false },
    { title: "Backlog", desc: "Execução estratégica", highlight: true },
  ];

  return (
    <VisionContainer>
      <SectionTitle>A Minha Visão & Fluxo de Valor</SectionTitle>

      <FlowWrapper>
        {flowSteps.map((step, index) => (
          <Fragment key={index}>
            {/* O Cartão (Post-it) */}
            <FlowNode
              $isHighlight={step.highlight}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.3, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.05, translateY: -5 }}
            >
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </FlowNode>

            {index < flowSteps.length - 1 && (
              <ArrowConnector
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index * 0.3) + 0.15, duration: 0.3 }}
              >
                <ArrowRight size={28} strokeWidth={1} />
              </ArrowConnector>
            )}
          </Fragment>
        ))}
      </FlowWrapper>
    </VisionContainer>
  );
}