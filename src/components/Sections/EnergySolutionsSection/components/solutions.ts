import img2 from "../../../../assets/image2.jpg";
import img2x1024w from "../../../../assets/image2-1024w.jpg";
import img5 from "../../../../assets/image5.jpg";
import img11 from "../../../../assets/image11.jpg";
import img11x1024w from "../../../../assets/image11-1024w.jpg";
import img7 from "../../../../assets/image7.jpg";
import img7x1024w from "../../../../assets/image7-1024w.jpg";
import img12 from "../../../../assets/img12.jpg";
import img6 from "../../../../assets/image6small.jpg";

export type SolutionType = {
  title: string;
  description: string;
  imgSrc: string;
  srcSet: string;
  modalTitle: string;
  modalDescription: string;
  modalImgSrc: string;
  key: number;
};

export const solutions: SolutionType[] = [
  {
    key: 1,
    title: "Fotowoltaika",
    description:
      "Fotowoltaika to technologia, która wykorzystuje energię słoneczną do produkcji elektryczności. Panele mogą być zamontowane na dachu domu lub na ziemi co daje szerokie możliwości wykorzystania instalacji.",
    imgSrc: img2,
    srcSet: `${img2} 1920w, ${img2x1024w} 1024w`,
    modalTitle: "Wartość Energii Fotowoltaicznej dla Zrównoważonej Przyszłości",
    modalDescription:
      "Energia fotowoltaiczna stanowi kluczowy element w dążeniu do zrównoważonej przyszłości energetycznej. Dzięki wykorzystaniu promieniowania słonecznego do wytwarzania elektryczności, fotowoltaika oferuje szereg korzyści dla środowiska i społeczeństwa. Instalacja paneli fotowoltaicznych umożliwia nie tylko produkcję własnej, czystej energii, ale także redukcję emisji gazów cieplarnianych oraz zmniejszenie zależności od tradycyjnych źródeł energii. Ponadto, fotowoltaika może przynieść oszczędności finansowe poprzez zmniejszenie rachunków za energię elektryczną oraz dostępność różnych programów wsparcia finansowego dla instalatorów.",
    modalImgSrc: img5,
  },
  {
    key: 2,
    title: "Pompy Ciepła",
    description:
      "Pompy ciepła to urządzenia, które używają energii z otoczenia do ogrzewania lub chłodzenia pomieszczeń. Działają na zasadzie przekazywania ciepła z jednego miejsca do drugiego.",
    imgSrc: img11,
    srcSet: `${img11} 1920w, ${img11x1024w} 1024w`,
    modalTitle:
      "Zalety i Wartość Pompy Ciepła dla Efektywności Energetycznej i Komfortu Termicznego",
    modalDescription:
      "Pompa ciepła jest wartościowym rozwiązaniem z kilku powodów. Po pierwsze, przyczynia się do oszczędności energii poprzez wykorzystanie odnawialnych źródeł ciepła, takich jak powietrze, grunt czy woda, co przekłada się na mniejsze zużycie energii elektrycznej w porównaniu do tradycyjnych systemów grzewczych. Ponadto, mimo początkowych kosztów inwestycyjnych, pompy ciepła są ekonomiczne w eksploatacji, charakteryzując się niskimi kosztami użytkowania oraz długą żywotnością. Ich działanie przynosi również komfort cieplny mieszkańcom, zapewniając równomierne rozprowadzenie ciepła w pomieszczeniach i możliwość chłodzenia w okresie letnim. ",
    modalImgSrc: img12,
  },
  {
    key: 3,
    title: "Klimatyzacja",
    description:
      "Klimatyzacja to system, który reguluje temperaturę, wilgotność i czystość powietrza w pomieszczeniach, zapewniając komfortowe warunki życia. Działa poprzez chłodzenie lub ogrzewanie powietrza oraz usuwanie wilgoci i zanieczyszczeń.",
    imgSrc: img7,
    srcSet: `${img7} 1920w, ${img7x1024w} 1024w`,
    modalTitle:
      "Korzyści i Wartość Klimatyzacji dla Komfortu i Efektywności Wnętrz",
    modalDescription:
      "Klimatyzacja stanowi istotny element zapewniający komfort i wydajność energetyczną w dzisiejszych budynkach. Oprócz oczywistej funkcji chłodzenia w gorące dni, systemy klimatyzacyjne dostarczają optymalne warunki temperaturowe oraz poprawiają jakość powietrza dzięki zaawansowanym filtrom, które usuwają zanieczyszczenia i alergeny. Dzięki nowoczesnym technologiom, klimatyzatory są coraz bardziej energooszczędne, co przekłada się na mniejsze rachunki za energię i mniejsze obciążenie dla środowiska. Dodatkowo, klimatyzacja umożliwia kontrolę wilgotności powietrza, co jest istotne dla zapewnienia zdrowego i komfortowego środowiska.",
    modalImgSrc: img6,
  },
];
