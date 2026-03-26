import { ShoppingBag, Store, Megaphone, Laptop } from 'lucide-react';
import {
  TrajectoryContainer,
  SectionTitle,
  NodesWrapper,
  NodeCard,
  NodeTitle,
  NodeSubtitle
} from './styles';

export function Trajectory() {
  const trajectoryItems = [
    {
      icon: ShoppingBag,
      title: "10 anos",
      subtitle: "Varejo",
      perspective: "Sólida base em atendimento, operações e dinâmica do consumidor.",
      delay: 0.2
    },
    {
      icon: Store,
      title: "Empreendedora",
      subtitle: "Amare Fashion",
      perspective: "Visão 360º de negócio: desde o produto até a logística.",
      delay: 0.4
    },
    {
      icon: Megaphone,
      title: "Marketing",
      subtitle: "Estratégia",
      perspective: "Habilidade de comunicar valor e entender personas.",
      delay: 0.6
    },
    {
      icon: Laptop,
      title: "Transição Tech",
      subtitle: "Dev & Produto",
      perspective: "Unindo a experiência de mercado com o 'como fazer' digital.",
      delay: 0.8
    },
  ];

  return (
    <TrajectoryContainer>
      <SectionTitle>Minha Trajetória</SectionTitle>

      <NodesWrapper>
        {trajectoryItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <NodeCard
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.05 }}
            >
              <Icon size={32} color="var(--color-j-action)" strokeWidth={1.5} />
              <NodeTitle>{item.title}</NodeTitle>
              {item.subtitle && <NodeSubtitle>{item.subtitle}</NodeSubtitle>}

              <div className="perspective-tooltip">
                {item.perspective}
              </div>
            </NodeCard>
          );
        })}
      </NodesWrapper>
    </TrajectoryContainer>
  );
}