import { X, } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Overlay, ModalContent, Canvas, CloseButton, ConnectionLine } from './styles';
import { NodeCard, NodeTitle, NodeSubtitle } from '../Trajectory/styles';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function JourneyModal({ isOpen, onClose }: Props) {
  const fullJourney = [
    { title: "Varejo (14 anos) - Mat. Construção", sub: "Vendas Técnicas", desc: "DSRP: Visão analítica para quebrar problemas complexos." },
    { title: "Loja Moda Feminina", sub: "Vendas e Humano", desc: "DSRP: Observação e escuta ativa para descobrir dores reais." },
    { title: "Gerente de Multimarcas", sub: "Gestão e Liderança", desc: "DSRP: Organização do caos e priorização de backlog operacional." },
    { title: "Amare Fashion", sub: "Empreendedorismo Total", desc: "DSRP: Visão 360º e mentalidade de Product Owner." },
    { title: "Maternidade", sub: "Ponto de Virada", desc: "DSRP: Resiliência e tomada de decisão sob pressão extrema." },
    { title: "Digitalização (Pós Pandemia)", sub: "Estratégia Online", desc: "DSRP: Entendimento profundo da jornada digital do cliente." },
    { title: "Transição Tech", sub: "Residência Serratec", desc: "DSRP: Adaptabilidade e foco em aprendizado contínuo." },
    { title: "Mundo Tech", sub: "PO / Scrum / Dev", desc: "A Evolução Final: Uni negócio, empatia e sistemas complexos." }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <ModalContent initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}>
            <CloseButton onClick={onClose}><X size={24} /></CloseButton>

            <Canvas>
              <h2 style={{ textAlign: 'center', color: 'var(--color-j-accent)', fontWeight: 300 }}>Meu Mapa Mental de Evolução</h2>

              {fullJourney.map((item, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <NodeCard style={{ width: '100%', maxWidth: '400px', cursor: 'default' }}>
                    <NodeTitle>{item.title}</NodeTitle>
                    <NodeSubtitle>{item.sub}</NodeSubtitle>
                    <p style={{ fontSize: '0.75rem', marginTop: '1rem', color: 'var(--color-j-sub)' }}>{item.desc}</p>
                  </NodeCard>

                  {index < fullJourney.length - 1 && (
                    <ConnectionLine as={motion.div} initial={{ height: 0 }} animate={{ height: '4rem' }} transition={{ delay: 0.5 }} />
                  )}
                </div>
              ))}

              <p style={{ textAlign: 'center', fontStyle: 'italic', padding: '2rem', color: 'var(--color-j-accent)' }}>
                “Eu não comecei na tecnologia, eu evoluí até ela.”
              </p>
            </Canvas>
          </ModalContent>
        </Overlay>
      )}
    </AnimatePresence>
  );
}