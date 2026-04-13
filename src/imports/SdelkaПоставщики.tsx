import svgPaths from "./svg-fre1tjk585";
import { imgVector } from "./svg-fn8h0";

function Search() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Search">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #999999)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1 11.1" id="Vector_2" stroke="var(--stroke-0, #999999)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[21px] items-center overflow-clip relative rounded-[inherit] w-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#999999] text-[14px] text-nowrap whitespace-pre">Поиск запросов...</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] box-border content-stretch flex gap-[8px] h-[48px] items-center left-[148.69px] px-[16.8px] py-[0.8px] rounded-[16px] top-0 w-[300px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Search />
      <TextInput />
    </div>
  );
}

function Container1() {
  return <div className="absolute h-0 left-[464.69px] top-[24px] w-[485px]" data-name="Container" />;
}

function Filter() {
  return (
    <div className="absolute left-[20px] size-[16px] top-[15.2px]" data-name="Filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Filter">
          <path d={svgPaths.p2771e980} id="Vector" stroke="var(--stroke-0, #191919)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] border-[0.8px] border-[rgba(255,255,255,0.8)] border-solid h-[48px] left-0 rounded-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0 w-[132.688px]" data-name="Button">
      <Filter />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[82px] not-italic text-[#191919] text-[14px] text-center text-nowrap top-[12px] translate-x-[-50%] whitespace-pre">Фильтры</p>
    </div>
  );
}

function MainScreen() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[48px] left-[-184.71px] to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(255,255,255,0.2)] w-[184.713px]" data-name="MainScreen" />;
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Plus">
          <path d="M8 3.33333V12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3.33333 8H12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[47px] not-italic text-[14px] text-center text-nowrap text-white top-[-1.2px] translate-x-[-50%] whitespace-pre">Новый запрос</p>
      </div>
    </div>
  );
}

function MainScreen1() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[20px] items-center left-[32px] top-[14px] w-[120.713px]" data-name="MainScreen">
      <Plus />
      <Text />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#ff6a39] h-[48px] left-[965.69px] overflow-clip rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[184.713px]" data-name="Button">
      <MainScreen />
      <MainScreen1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
      <Button />
      <Button1 />
    </div>
  );
}

function MainScreen2() {
  return (
    <div className="absolute left-[24px] rounded-[4px] size-[20px] top-[16px]" data-name="MainScreen">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[52.4px] left-0 top-0 w-[52px]" data-name="TableHead">
      <MainScreen2 />
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[52.4px] left-[52px] top-0 w-[44.6px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[15.714px] left-[8px] not-italic text-[#191919] text-[11px] text-nowrap top-[16.14px] tracking-[1.32px] uppercase whitespace-pre">№</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[52.4px] left-[96.6px] top-0 w-[400.613px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[15.714px] left-[8px] not-italic text-[#191919] text-[11px] text-nowrap top-[16.14px] tracking-[1.32px] uppercase whitespace-pre">Название</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[52.4px] left-[497.21px] top-0 w-[188.438px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[15.714px] left-[8px] not-italic text-[#191919] text-[11px] text-nowrap top-[16.14px] tracking-[1.32px] uppercase whitespace-pre">Метрики</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[52.4px] left-[685.65px] top-0 w-[182.725px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[15.714px] left-[8px] not-italic text-[#191919] text-[11px] text-nowrap top-[16.14px] tracking-[1.32px] uppercase whitespace-pre">Дата создания</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[52.4px] left-[868.38px] top-0 w-[280.425px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[15.714px] left-[8px] not-italic text-[#191919] text-[11px] text-nowrap top-[16.14px] tracking-[1.32px] uppercase whitespace-pre">Статус</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(229,231,235,0.4)] border-solid h-[52.4px] left-0 top-0 w-[1148.8px]" data-name="TableRow">
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
      <TableHead5 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[52.4px] left-0 top-0 w-[1148.8px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function MainScreen3() {
  return (
    <div className="absolute content-stretch flex h-[17.6px] items-start left-[8px] top-[24px] w-[7.013px]" data-name="MainScreen">
      <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#666666] text-[13px] text-nowrap whitespace-pre">4</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[64.963px] left-[52px] top-0 w-[44.6px]" data-name="TableCell">
      <MainScreen3 />
    </div>
  );
}

function MainScreen4() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-[8px] top-[23.28px] w-[155.6px]" data-name="MainScreen">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191919] text-[14px] text-nowrap whitespace-pre">Промышленные насосы</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[64.963px] left-[96.6px] top-0 w-[400.613px]" data-name="TableCell">
      <MainScreen4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3ae39480} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[7.013px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[18.563px] items-start relative w-[7.013px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#191919] text-[13px] text-nowrap whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[29.013px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[18.563px] items-center relative w-[29.013px]">
        <Icon />
        <Text1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3dcdd780} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[7.013px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[18.563px] items-start relative w-[7.013px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#191919] text-[13px] text-nowrap whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[29.013px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[18.563px] items-center relative w-[29.013px]">
        <Icon1 />
        <Text2 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23bbaf00} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[7.013px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[18.563px] items-start relative w-[7.013px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#191919] text-[13px] text-nowrap whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[29.013px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[18.563px] items-center relative w-[29.013px]">
        <Icon2 />
        <Text3 />
      </div>
    </div>
  );
}

function MainScreen5() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[18.563px] items-center left-[8px] top-[23.2px] w-[172.438px]" data-name="MainScreen">
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[64.963px] left-[497.21px] top-0 w-[188.438px]" data-name="TableCell">
      <MainScreen5 />
    </div>
  );
}

function MainScreen6() {
  return (
    <div className="absolute content-stretch flex h-[17.6px] items-start left-[8px] top-[24px] w-[85.525px]" data-name="MainScreen">
      <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#666666] text-[13px] text-nowrap whitespace-pre">1 нояб. 2025 г.</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[64.963px] left-[685.65px] top-0 w-[182.725px]" data-name="TableCell">
      <MainScreen6 />
    </div>
  );
}

function Loader() {
  return (
    <div className="relative size-[16.386px]" data-name="Loader2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Loader2">
          <path d={svgPaths.p354cd98} id="Vector" stroke="var(--stroke-0, #432DD7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.36549" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[18.563px] items-start left-[32px] top-[6px] w-[111.438px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#432dd7] text-[13px] text-nowrap whitespace-pre">Рассылаем письма</p>
    </div>
  );
}

function StatusBadge() {
  return (
    <div className="absolute bg-indigo-50 border-[#c6d2ff] border-[0.8px] border-solid h-[32.163px] left-[8px] rounded-[12px] top-[16.4px] w-[157.038px]" data-name="StatusBadge">
      <div className="absolute flex items-center justify-center left-[1.63px] size-[22.375px] top-[7.08px]" style={{ "--transform-inner-width": "16.375", "--transform-inner-height": "16.375" } as React.CSSProperties}>
        <div className="flex-none rotate-[29.917deg]">
          <Loader />
        </div>
      </div>
      <Text4 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[64.963px] left-[868.38px] top-0 w-[280.425px]" data-name="TableCell">
      <StatusBadge />
    </div>
  );
}

function MainScreen7() {
  return (
    <div className="absolute left-[24px] rounded-[4px] size-[20px] top-[22.48px]" data-name="MainScreen">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function MainScreen8() {
  return <div className="absolute bg-[#ff6a39] h-[64.162px] left-0 opacity-0 top-[0.4px] w-[2px]" data-name="MainScreen" />;
}

function TableCell5() {
  return (
    <div className="absolute h-[64.963px] left-0 top-0 w-[52px]" data-name="TableCell">
      <MainScreen7 />
      <MainScreen8 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(229,231,235,0.3)] border-solid h-[64.963px] left-0 top-0 w-[1148.8px]" data-name="TableRow">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function MainScreen9() {
  return (
    <div className="absolute content-stretch flex h-[17.6px] items-start left-[8px] top-[24px] w-[7.013px]" data-name="MainScreen">
      <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#666666] text-[13px] text-nowrap whitespace-pre">3</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[64.963px] left-[52px] top-0 w-[44.6px]" data-name="TableCell">
      <MainScreen9 />
    </div>
  );
}

function MainScreen10() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-[8px] top-[23.27px] w-[178.5px]" data-name="MainScreen">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191919] text-[14px] text-nowrap whitespace-pre">Программное обеспечение</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[64.963px] left-[96.6px] top-0 w-[400.613px]" data-name="TableCell">
      <MainScreen10 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3ae39480} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[7.013px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[18.563px] items-start relative w-[7.013px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#191919] text-[13px] text-nowrap whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[29.013px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[18.563px] items-center relative w-[29.013px]">
        <Icon3 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3dcdd780} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[7.013px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[18.563px] items-start relative w-[7.013px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#191919] text-[13px] text-nowrap whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[29.013px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[18.563px] items-center relative w-[29.013px]">
        <Icon4 />
        <Text6 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23bbaf00} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[7.013px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[18.563px] items-start relative w-[7.013px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#191919] text-[13px] text-nowrap whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[29.013px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[18.563px] items-center relative w-[29.013px]">
        <Icon5 />
        <Text7 />
      </div>
    </div>
  );
}

function MainScreen11() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[18.563px] items-center left-[8px] top-[23.2px] w-[172.438px]" data-name="MainScreen">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[64.963px] left-[497.21px] top-0 w-[188.438px]" data-name="TableCell">
      <MainScreen11 />
    </div>
  );
}

function MainScreen12() {
  return (
    <div className="absolute content-stretch flex h-[17.6px] items-start left-[8px] top-[24px] w-[82.763px]" data-name="MainScreen">
      <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#666666] text-[13px] text-nowrap whitespace-pre">31 окт. 2025 г.</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[64.963px] left-[685.65px] top-0 w-[182.725px]" data-name="TableCell">
      <MainScreen12 />
    </div>
  );
}

function Container9() {
  return <div className="absolute bg-[#0084d1] left-[12px] rounded-[2.68435e+07px] size-[6px] top-[12.28px]" data-name="Container" />;
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[18.563px] items-start left-[26px] top-[6px] w-[106.65px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#00598a] text-[13px] text-nowrap whitespace-pre">Нужно уточнение</p>
    </div>
  );
}

function StatusBadge1() {
  return (
    <div className="absolute bg-[#dff2fe] border-[#74d4ff] border-[0.8px] border-solid h-[32.163px] left-[8px] rounded-[12px] top-[16.4px] w-[146.25px]" data-name="StatusBadge">
      <Container9 />
      <Text8 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[64.963px] left-[868.38px] top-0 w-[280.425px]" data-name="TableCell">
      <StatusBadge1 />
    </div>
  );
}

function MainScreen13() {
  return (
    <div className="absolute left-[24px] rounded-[4px] size-[20px] top-[22.48px]" data-name="MainScreen">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function MainScreen14() {
  return <div className="absolute bg-[#ff6a39] h-[64.162px] left-0 opacity-0 top-[0.4px] w-[2px]" data-name="MainScreen" />;
}

function TableCell11() {
  return (
    <div className="absolute h-[64.963px] left-0 top-0 w-[52px]" data-name="TableCell">
      <MainScreen13 />
      <MainScreen14 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(229,231,235,0.3)] border-solid h-[64.963px] left-0 top-[64.96px] w-[1148.8px]" data-name="TableRow">
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function MainScreen15() {
  return (
    <div className="absolute content-stretch flex h-[17.6px] items-start left-[8px] top-[24px] w-[7.013px]" data-name="MainScreen">
      <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#666666] text-[13px] text-nowrap whitespace-pre">2</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[64.963px] left-[52px] top-0 w-[44.6px]" data-name="TableCell">
      <MainScreen15 />
    </div>
  );
}

function MainScreen16() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-[8px] top-[23.27px] w-[141.063px]" data-name="MainScreen">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191919] text-[14px] text-nowrap whitespace-pre">Канцелярские товары</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[64.963px] left-[96.6px] top-0 w-[400.613px]" data-name="TableCell">
      <MainScreen16 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3ae39480} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[7.013px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[18.563px] items-start relative w-[7.013px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#191919] text-[13px] text-nowrap whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[29.013px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[18.563px] items-center relative w-[29.013px]">
        <Icon6 />
        <Text9 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3dcdd780} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[7.013px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[18.563px] items-start relative w-[7.013px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#191919] text-[13px] text-nowrap whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[29.013px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[18.563px] items-center relative w-[29.013px]">
        <Icon7 />
        <Text10 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23bbaf00} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[7.013px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[18.563px] items-start relative w-[7.013px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#191919] text-[13px] text-nowrap whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[29.013px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[18.563px] items-center relative w-[29.013px]">
        <Icon8 />
        <Text11 />
      </div>
    </div>
  );
}

function MainScreen17() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[18.563px] items-center left-[8px] top-[23.2px] w-[172.438px]" data-name="MainScreen">
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[64.963px] left-[497.21px] top-0 w-[188.438px]" data-name="TableCell">
      <MainScreen17 />
    </div>
  );
}

function MainScreen18() {
  return (
    <div className="absolute content-stretch flex h-[17.6px] items-start left-[8px] top-[24px] w-[82.763px]" data-name="MainScreen">
      <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#666666] text-[13px] text-nowrap whitespace-pre">30 окт. 2025 г.</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[64.963px] left-[685.65px] top-0 w-[182.725px]" data-name="TableCell">
      <MainScreen18 />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-[#f0b100] left-[12px] rounded-[2.68435e+07px] size-[6px] top-[12.28px]" data-name="Container" />;
}

function Text12() {
  return (
    <div className="absolute content-stretch flex h-[18.563px] items-start left-[26px] top-[6px] w-[105.688px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#a65f00] text-[13px] text-nowrap whitespace-pre">Собираем ответы</p>
    </div>
  );
}

function StatusBadge2() {
  return (
    <div className="absolute bg-yellow-50 border-[#fff085] border-[0.8px] border-solid h-[32.163px] left-[8px] rounded-[12px] top-[16.4px] w-[145.288px]" data-name="StatusBadge">
      <Container13 />
      <Text12 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[64.963px] left-[868.38px] top-0 w-[280.425px]" data-name="TableCell">
      <StatusBadge2 />
    </div>
  );
}

function MainScreen19() {
  return (
    <div className="absolute left-[24px] rounded-[4px] size-[20px] top-[22.48px]" data-name="MainScreen">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function MainScreen20() {
  return <div className="absolute bg-[#ff6a39] h-[64.162px] left-0 opacity-0 top-[0.4px] w-[2px]" data-name="MainScreen" />;
}

function TableCell17() {
  return (
    <div className="absolute h-[64.963px] left-0 top-0 w-[52px]" data-name="TableCell">
      <MainScreen19 />
      <MainScreen20 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[0px_0px_0.8px] border-[rgba(229,231,235,0.3)] border-solid h-[64.963px] left-0 top-[129.93px] w-[1148.8px]" data-name="TableRow">
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function MainScreen21() {
  return (
    <div className="absolute content-stretch flex h-[17.6px] items-start left-[8px] top-[24px] w-[7.013px]" data-name="MainScreen">
      <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#666666] text-[13px] text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[64.563px] left-[52px] top-0 w-[44.6px]" data-name="TableCell">
      <MainScreen21 />
    </div>
  );
}

function MainScreen22() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-[8px] top-[23.28px] w-[254.075px]" data-name="MainScreen">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191919] text-[14px] text-nowrap whitespace-pre">Закупка компьютерного оборудования</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[64.563px] left-[96.6px] top-0 w-[400.613px]" data-name="TableCell">
      <MainScreen22 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3ae39480} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[7.013px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[18.563px] items-start relative w-[7.013px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#191919] text-[13px] text-nowrap whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[29.013px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[18.563px] items-center relative w-[29.013px]">
        <Icon9 />
        <Text13 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3dcdd780} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[7.013px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[18.563px] items-start relative w-[7.013px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#191919] text-[13px] text-nowrap whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[29.013px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[18.563px] items-center relative w-[29.013px]">
        <Icon10 />
        <Text14 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23bbaf00} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[7.013px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[18.563px] items-start relative w-[7.013px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#191919] text-[13px] text-nowrap whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[18.563px] relative shrink-0 w-[29.013px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[18.563px] items-center relative w-[29.013px]">
        <Icon11 />
        <Text15 />
      </div>
    </div>
  );
}

function MainScreen23() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[18.563px] items-center left-[8px] top-[23.2px] w-[172.438px]" data-name="MainScreen">
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[64.563px] left-[497.21px] top-0 w-[188.438px]" data-name="TableCell">
      <MainScreen23 />
    </div>
  );
}

function MainScreen24() {
  return (
    <div className="absolute content-stretch flex h-[17.6px] items-start left-[8px] top-[24px] w-[82.763px]" data-name="MainScreen">
      <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#666666] text-[13px] text-nowrap whitespace-pre">29 окт. 2025 г.</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[64.563px] left-[685.65px] top-0 w-[182.725px]" data-name="TableCell">
      <MainScreen24 />
    </div>
  );
}

function Container17() {
  return <div className="absolute bg-[#f0b100] left-[12px] rounded-[2.68435e+07px] size-[6px] top-[12.27px]" data-name="Container" />;
}

function Text16() {
  return (
    <div className="absolute content-stretch flex h-[18.563px] items-start left-[26px] top-[6px] w-[105.688px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[18.571px] not-italic relative shrink-0 text-[#a65f00] text-[13px] text-nowrap whitespace-pre">Собираем ответы</p>
    </div>
  );
}

function StatusBadge3() {
  return (
    <div className="absolute bg-yellow-50 border-[#fff085] border-[0.8px] border-solid h-[32.163px] left-[8px] rounded-[12px] top-[16.4px] w-[145.288px]" data-name="StatusBadge">
      <Container17 />
      <Text16 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[64.563px] left-[868.38px] top-0 w-[280.425px]" data-name="TableCell">
      <StatusBadge3 />
    </div>
  );
}

function MainScreen25() {
  return (
    <div className="absolute left-[24px] rounded-[4px] size-[20px] top-[22.48px]" data-name="MainScreen">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function MainScreen26() {
  return <div className="absolute bg-[#ff6a39] h-[64.162px] left-0 opacity-0 top-[0.4px] w-[2px]" data-name="MainScreen" />;
}

function TableCell23() {
  return (
    <div className="absolute h-[64.563px] left-0 top-0 w-[52px]" data-name="TableCell">
      <MainScreen25 />
      <MainScreen26 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[64.563px] left-0 top-[194.89px] w-[1148.8px]" data-name="TableRow">
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[259.45px] left-0 top-[52.4px] w-[1148.8px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[311.85px] relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] h-[313.45px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[313.45px] items-start p-[0.8px] relative w-full">
          <Table />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(229,231,235,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[481.45px] relative shrink-0 w-full" data-name="Main Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] h-[481.45px] items-start pb-0 pt-[40px] px-[32px] relative w-full">
          <Container2 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function MainScreen27() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex flex-col h-[729.6px] items-start left-[80px] overflow-clip top-0 w-[1214.4px]" data-name="MainScreen">
      <MainContent />
    </div>
  );
}

function Container19() {
  return <div className="absolute blur-[100px] filter left-[664.4px] rounded-[2.68435e+07px] size-[972.172px] top-[-270px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 972.17 972.17\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -68.743 -68.743 0 486.09 486.09)\\\'><stop stop-color=\\\'rgba(255,106,57,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(191,80,43,0.75)\\\' offset=\\\'0.175\\\'/><stop stop-color=\\\'rgba(128,53,29,0.5)\\\' offset=\\\'0.35\\\'/><stop stop-color=\\\'rgba(64,27,14,0.25)\\\' offset=\\\'0.525\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.7\\\'/></radialGradient></defs></svg>')" }} />;
}

function Container20() {
  return <div className="absolute blur-[100px] filter left-[-242.51px] rounded-[2.68435e+07px] size-[815.079px] top-[-37.71px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 815.08 815.08\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -57.635 -57.635 0 407.54 407.54)\\\'><stop stop-color=\\\'rgba(255,140,105,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(191,105,79,0.75)\\\' offset=\\\'0.175\\\'/><stop stop-color=\\\'rgba(128,70,53,0.5)\\\' offset=\\\'0.35\\\'/><stop stop-color=\\\'rgba(64,35,26,0.25)\\\' offset=\\\'0.525\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.7\\\'/></radialGradient></defs></svg>')" }} />;
}

function Container21() {
  return <div className="absolute blur-[100px] filter left-[161.73px] rounded-[2.68435e+07px] size-[701.071px] top-[309.73px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 701.07 701.07\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -49.573 -49.573 0 350.54 350.54)\\\'><stop stop-color=\\\'rgba(255,106,57,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(191,80,43,0.75)\\\' offset=\\\'0.175\\\'/><stop stop-color=\\\'rgba(128,53,29,0.5)\\\' offset=\\\'0.35\\\'/><stop stop-color=\\\'rgba(64,27,14,0.25)\\\' offset=\\\'0.525\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.7\\\'/></radialGradient></defs></svg>')" }} />;
}

function Container22() {
  return (
    <div className="absolute h-[729.6px] left-0 opacity-[0.15] top-0 w-[1294.4px]" data-name="Container">
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return <div className="absolute h-[729.6px] left-0 opacity-[0.02] top-0 w-[1294.4px]" data-name="Container" style={{ backgroundImage: "linear-gradient(rgb(25, 25, 25) 0.13706%, rgba(0, 0, 0, 0) 0.13706%), linear-gradient(90deg, rgb(25, 25, 25) 0%, rgba(0, 0, 0, 0) 0%)" }} />;
}

function AnimatedBackground() {
  return (
    <div className="absolute h-[729.6px] left-0 overflow-clip top-0 w-[1294.4px]" data-name="AnimatedBackground">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[729.6px] left-0 rounded-br-[24px] rounded-tr-[24px] top-0 w-[80px]" data-name="Sidebar">
      <div className="absolute inset-0 pointer-events-none shadow-[0.5px_0px_0px_0px_inset_rgba(255,255,255,0.9),0px_0.5px_0px_0px_inset_rgba(255,255,255,0.5),0px_-0.5px_0px_0px_inset_rgba(255,255,255,0.3)]" />
    </div>
  );
}

function Sidebar1() {
  return <div className="absolute bg-[rgba(255,255,255,0)] h-[729.6px] left-0 rounded-br-[24px] rounded-tr-[24px] shadow-[0.5px_0px_0px_0px_rgba(0,0,0,0.03),8px_0px_24px_-8px_rgba(0,0,0,0.08),16px_0px_48px_-12px_rgba(0,0,0,0.04)] top-0 w-[80px]" data-name="Sidebar" />;
}

function Sidebar2() {
  return <div className="absolute h-[729.6px] left-0 rounded-br-[24px] rounded-tr-[24px] top-0 w-[80px]" data-name="Sidebar" />;
}

function Group() {
  return (
    <div className="absolute contents inset-[3.59%_-150.6%_3.59%_16.53%]" data-name="Group">
      <div className="absolute inset-[3.59%_-150.6%_3.59%_16.53%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.614px_-1.578px] mask-size-[40px_44px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 41">
          <path d={svgPaths.p168d9d00} fill="var(--fill-0, #FF6A39)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[44px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[44px] items-start left-[20px] shadow-[0px_2px_16px_0px_rgba(255,106,57,0.15)] top-[26px] w-[40px]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.75)] h-[52px] left-0 rounded-[16px] shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.08),0px_4px_16px_-4px_rgba(0,0,0,0.06),0px_0px_0px_0.5px_rgba(255,106,57,0.08)] top-0 w-[56px]" data-name="Container">
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0.5px_0px_0px_inset_#ffffff,0px_-0.5px_0px_0px_inset_rgba(255,255,255,0.7)]" />
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-[rgba(255,255,255,0.35)] h-[52px] left-0 rounded-[16px] top-0 w-[56px]" data-name="Container" />;
}

function Container27() {
  return <div className="absolute bg-gradient-to-b from-[rgba(255,106,57,0.8)] h-[32px] left-[-12px] rounded-[2.68435e+07px] shadow-[0px_0px_12px_0px_rgba(255,106,57,0.5),0px_0px_4px_0px_rgba(255,106,57,0.7)] to-[rgba(255,106,57,0.8)] top-[10px] via-50% via-[#ff6a39] w-[4px]" data-name="Container" />;
}

function LayoutDashboard() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-full" data-name="LayoutDashboard">
      <div className="absolute bottom-1/2 left-[12.5%] right-[58.33%] top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 11">
            <path d={svgPaths.p742b840} id="Vector" stroke="var(--stroke-0, #FF6A39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_12.5%_66.67%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-20%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 7">
            <path d={svgPaths.p11adf300} id="Vector" stroke="var(--stroke-0, #FF6A39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-[58.33%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-11.11%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 11">
            <path d={svgPaths.p742b840} id="Vector" stroke="var(--stroke-0, #FF6A39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_58.33%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-20%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 7">
            <path d={svgPaths.p11adf300} id="Vector" stroke="var(--stroke-0, #FF6A39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Sidebar3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] size-[22px] top-[15px]" data-name="Sidebar">
      <LayoutDashboard />
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Button">
      <Container25 />
      <Container26 />
      <Container27 />
      <Sidebar3 />
    </div>
  );
}

function Container28() {
  return <div className="absolute bg-[rgba(255,255,255,0.35)] h-[52px] left-0 rounded-[16px] top-0 w-[56px]" data-name="Container" />;
}

function MessageSquare() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-full" data-name="MessageSquare">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <path d={svgPaths.p1b672300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Sidebar4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] size-[22px] top-[15px]" data-name="Sidebar">
      <MessageSquare />
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Button">
      <Container28 />
      <Sidebar4 />
    </div>
  );
}

function Container29() {
  return <div className="absolute bg-[rgba(255,255,255,0.35)] h-[52px] left-0 rounded-[16px] top-0 w-[56px]" data-name="Container" />;
}

function CheckSquare() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-full" data-name="CheckSquare">
      <div className="absolute inset-[16.67%_8.33%_41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-10%_-7.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 11">
            <path d={svgPaths.p3d26ac80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <path d={svgPaths.p3e0b0080} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] size-[22px] top-0" data-name="Container">
      <CheckSquare />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[42px] px-[6px] py-0 rounded-[2.68435e+07px] shadow-[0px_2px_8px_0px_rgba(255,106,57,0.4),0px_0px_0px_2.5px_rgba(255,255,255,0.85)] size-[20px] top-[-4px]" data-name="Container">
      <p className="font-['Arial:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[11px] text-center text-nowrap text-white whitespace-pre">4</p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0.5px_0px_0px_inset_rgba(255,255,255,0.4)]" />
    </div>
  );
}

function Sidebar5() {
  return (
    <div className="absolute h-[22px] left-0 top-[15px] w-[56px]" data-name="Sidebar">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Button">
      <Container29 />
      <Sidebar5 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[172px] items-start left-[12px] top-[8px] w-[56px]" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container33() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[0.5px] left-[26px] to-[rgba(0,0,0,0)] top-[204px] via-50% via-[rgba(0,0,0,0.08)] w-[28px]" data-name="Container" />;
}

function Container34() {
  return <div className="absolute bg-[rgba(255,255,255,0.35)] h-[52px] left-0 rounded-[16px] top-0 w-[56px]" data-name="Container" />;
}

function Settings() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-full" data-name="Settings">
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p18970400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[4.17%_20.83%_20.83%_4.17%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <path d={svgPaths.p11509d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] size-[22px] top-[15px]" data-name="Container">
      <Settings />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[52px] left-[12px] top-[228.5px] w-[56px]" data-name="Button">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute h-[489.1px] left-0 top-[96px] w-[80px]" data-name="Navigation">
      <Container32 />
      <Container33 />
      <Button5 />
    </div>
  );
}

function Container36() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[0.5px] left-[12px] to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.08)] w-[56px]" data-name="Container" />;
}

function Container37() {
  return <div className="absolute bg-[rgba(255,255,255,0.35)] h-[52px] left-0 rounded-[16px] top-0 w-[56px]" data-name="Container" />;
}

function HelpCircle() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-full" data-name="HelpCircle">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
            <path d={svgPaths.p18832700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.15%_37.83%_45.83%_37.88%]" data-name="Vector">
        <div className="absolute inset-[-16.65%_-17.15%_-16.66%_-17.16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p2a93e800} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-1/2 right-[49.95%] top-[70.83%]" data-name="Vector">
        <div className="absolute inset-[-0.92px_-9166.46%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <path d="M0.916667 0.916667H0.926667" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Sidebar6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] size-[22px] top-[15px]" data-name="Sidebar">
      <HelpCircle />
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Button">
      <Container37 />
      <Sidebar6 />
    </div>
  );
}

function Container38() {
  return <div className="absolute bg-[rgba(255,255,255,0.35)] h-[52px] left-0 rounded-[16px] top-0 w-[56px]" data-name="Container" />;
}

function LogOut() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-full" data-name="LogOut">
      <div className="absolute inset-[12.5%_62.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 19">
            <path d={svgPaths.p94073c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_12.5%_29.17%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-10%_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 11">
            <path d={svgPaths.p4ecb100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[37.5%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.92px_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 2">
            <path d="M11.9167 0.916667H0.916667" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Sidebar7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] size-[22px] top-[15px]" data-name="Sidebar">
      <LogOut />
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Button">
      <Container38 />
      <Sidebar7 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[132px] items-start left-0 px-[12px] py-0 top-[12.5px] w-[80px]" data-name="Container">
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[144.5px] left-0 top-[585.1px] w-[80px]" data-name="Container">
      <Container36 />
      <Container39 />
    </div>
  );
}

function Sidebar8() {
  return (
    <div className="absolute h-[729.6px] left-0 top-0 w-[80px]" data-name="Sidebar">
      <Container24 />
      <Navigation />
      <Container40 />
    </div>
  );
}

function Sidebar9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.55)] h-[729.6px] left-0 top-0 w-[80px]" data-name="Sidebar">
      <Sidebar />
      <Sidebar1 />
      <Sidebar2 />
      <Sidebar8 />
    </div>
  );
}

export default function Sdelka() {
  return (
    <div className="bg-[#f9f9f9] relative size-full" data-name="Sdelka (Поставщики)">
      <MainScreen27 />
      <AnimatedBackground />
      <Sidebar9 />
    </div>
  );
}