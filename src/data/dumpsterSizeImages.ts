export const SIZE_CAPACITIES = [3, 4, 5, 7, 10] as const;
export type SizeCapacity = typeof SIZE_CAPACITIES[number];

export function dumpsterSizeImage(size: number) {
  return {
    src: `/images/tamanhos/cacamba-${size}m3.webp`,
    srcSet: `/images/tamanhos/cacamba-${size}m3-480.webp 480w, /images/tamanhos/cacamba-${size}m3.webp 1080w`,
    alt: `Caçamba de ${size} m³: comparação visual de tamanho com uma pessoa de 1,70 m e altura de referência`,
    width: 1080,
    height: 1080,
  };
}

export const LARGER_SIZE_OPTIONS = [
  { size: 7, title: 'Capacidade ampliada sob consulta', text: 'Consulte disponibilidade de 7 m³ para o endereço, os materiais e o acesso da obra. Confirme o limite de peso e as condições de transporte.' },
  { size: 10, title: 'Maior volume, com operação avaliada', text: 'A opção de 10 m³ depende de disponibilidade e avaliação do acesso, da composição e do peso da carga. Confirme a viabilidade antes de reservar.' },
];
