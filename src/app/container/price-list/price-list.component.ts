import { Component } from '@angular/core';

interface PriceRow {
  label: string;
  prices: string[];
}

interface PrintingDetails {
  quantities: string[];
  rows: PriceRow[];
}

interface TShirt {
  name: string;
  selectedTab: 'screen' | 'digital';
  screenPrinting: PrintingDetails;
  digitalPrinting: PrintingDetails;
}
@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent {
  tshirts: TShirt[] = [
    {
      name: 'PROMO TSHIRT',
      selectedTab: 'screen',
      screenPrinting: {
        quantities: ['25', '50', '100', '250', '500'],
        rows: [
          { label: '1 Colour', prices: ['$13.90', '$12.50', '$9.40', '$6.80', '$5.70'] },
          { label: '2 Colour', prices: ['$15.60', '$13.40', '$10.20', '$7.00', '$5.90'] },
          { label: '3 Colour', prices: ['$17.80', '$14.50', '$10.90', '$7.20', '$6.10'] },
          { label: '4 Colour', prices: ['$19.90', '$15.70', '$11.60', '$7.60', '$6.50'] },
        ],
      },
      digitalPrinting: {
        quantities: ['1+', '5+', '25+', '50+', '100+'],
        rows: [
          { label: 'A5', prices: ['$40.00', '$26.00', '$15.00', '$12.50', '$9.50'] },
          { label: 'A4', prices: ['$40.00', '$27.00', '$16.00', '$13.50', '$11.10'] },
          { label: 'A3', prices: ['$40.00', '$29.00', '$18.00', '$15.00', '$12.00'] },
          { label: 'Oversize', prices: ['$42.00', '$32.00', '$20.00', '$16.50', '$13.00'] },
        ],
      },
    },
    {
      name: 'STANDARD TSHIRT',
      selectedTab: 'screen',
      screenPrinting: {
        quantities: ['25', '50', '100', '250', '500'],
        rows: [
          { label: '1 Colour', prices: ['$14.60', '$13.20', '$10.10', '$7.50', '$6.40'] },
          { label: '2 Colour', prices: ['$16.30', '$14.10', '$10.90', '$7.70', '$6.60'] },
          { label: '3 Colour', prices: ['$18.50', '$15.20', '$11.60', '$7.90', '$6.80'] },
          { label: '4 Colour', prices: ['$20.60', '$16.40', '$12.30', '$8.30', '$7.20'] },
        ],
      },
      digitalPrinting: {
        quantities: ['1+', '5+', '25+', '50+', '100+'],
        rows: [
          { label: 'A5', prices: ['$40.00', '$27.00', '$16.00', '$13.50', '$10.50'] },
          { label: 'A4', prices: ['$40.00', '$28.00', '$17.00', '$14.50', '$12.10'] },
          { label: 'A3', prices: ['$40.00', '$30.00', '$19.00', '$16.00', '$13.00'] },
          { label: 'Oversize', prices: ['$42.00', '$33.00', '$21.00', '$17.50', '$14.00'] },
        ],
      },
    },
    {
      name: 'PREMIUM TSHIRT',
      selectedTab: 'screen',
      screenPrinting: {
        quantities: ['25', '50', '100', '250', '500'],
        rows: [
          { label: '1 Colour', prices: ['$16.10', '$14.70', '$11.60', '$9.00', '$7.90'] },
          { label: '2 Colour', prices: ['$17.80', '$15.60', '$12.40', '$9.20', '$8.10'] },
          { label: '3 Colour', prices: ['$20.00', '$16.70', '$13.10', '$9.40', '$8.30'] },
          { label: '4 Colour', prices: ['$22.10', '$17.90', '$13.80', '$9.70', '$8.70'] },
        ],
      },
      digitalPrinting: {
        quantities: ['1+', '5+', '25+', '50+', '100+'],
        rows: [
          { label: 'A5', prices: ['$40.00', '$26.00', '$15.00', '$12.50', '$9.50'] },
          { label: 'A4', prices: ['$40.00', '$27.00', '$16.00', '$13.50', '$11.10'] },
          { label: 'A3', prices: ['$40.00', '$29.00', '$18.00', '$15.00', '$12.00'] },
          { label: 'Oversize', prices: ['$42.00', '$32.00', '$20.00', '$16.50', '$13.00'] },
        ],
      },
    },
  ];

  showPriceList(tshirt: TShirt, tab: 'screen' | 'digital'): void {
    tshirt.selectedTab = tab;
  }
}
