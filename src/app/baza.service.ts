import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BazaService {
  JOVAN = [
          {id: '1083250', opis: 'SPIN LEZAJ 100KG SORNIK', kolicina: null, cena: 0.700},
          {id: '1083008', opis: 'ARX SPIN MAKAZE 12/20-9 250-L',kolicina: null, cena: 2.150},
          {id: '1083009', opis: 'SPIN MAKAZE 12/20-9 250-D',kolicina: null, cena: 2.100},
          {id: '1083010', opis: 'SPIN MAKAZE 12/20-9 350-L',kolicina: null, cena: 2.400},
          {id: '1083011', opis: 'ARX SPIN MAKAZE 12/20-9 350-D',kolicina: null, cena: 2.400},
          {id: '1083012', opis: 'ARX SPIN MAKAZE 12/20-9 500-L',kolicina: null, cena: 2.550},
          {id: '1083013', opis: 'ARX SPIN MAKAZE 12/20-9 500-D',kolicina: null, cena: 2.550},
          {id: '1083016', opis: 'ARX SPIN MAKAZE 250-L', kolicina: null, cena: 2.150},
          {id: '1083017', opis: 'ARX SPIN MAKAZE 250-D/13',kolicina: null, cena: 2.150},
          {id: '1083018', opis: 'ARX SPIN MAKAZE 12/20-13 350-L',kolicina: null, cena: 2.400},
          {id: '1083019', opis: 'ARX SPIN MAKAZE 350-D/13',kolicina: null, cena: 2.400},
          {id: '1083020', opis: 'ARX SPIN MAKAZE 500-L/13',kolicina: null, cena: 2.550},
          {id: '1083021', opis: 'ARX SPIN MAKAZE 500-D/13',kolicina: null, cena: 2.550},
          {id: '1083038', opis: 'SPIN VODILO MAKAZA250/470',kolicina: null, cena: 2.150},
          {id: '1083039', opis: 'ARX SPIN VOD.MAK.350/670',kolicina: null, cena: 2.300},
          {id: '1083040', opis: 'ARX SPIN VOD.MAK.500/870',kolicina: null, cena: 2.900},
          {id: '1083041', opis: 'ARX SPIN VOD.MAK.500/1070',kolicina: null, cena: 3.100},
          {id: '1083042', opis: 'ARX SPIN VOD.MAK.500/1270',kolicina: null, cena: 3.600},
          {id: '1083044', opis: 'ARX SPIN UGAONIK 1R',kolicina: null, cena: 2.050},
          {id: '1083049', opis: 'ARX SPN POSEBNI UGAONIK 1R',kolicina: null, cena: 3.450},
          {id: '1083058', opis: 'ARX SPIN SR.ZATV.500/550',kolicina: null, cena: 2.550},
          {id: '1083059', opis: 'ARX SPIN SR.ZATV.800/850',kolicina: null, cena: 2.750},
          {id: '1083060', opis: 'ARX SPIN SR.ZAT.1500/1550',kolicina: null, cena: 4.800},
          {id: '1083081', opis: 'ARX SPIN DK POG.320 D14,5',kolicina: null, cena: 2.500},
          {id: '1083082', opis: 'ARX SPIN DK POG.460 D14,5',kolicina: null, cena: 2.350},
          {id: '1083083', opis: 'ARX SPIN DK POG.660 D14,5',kolicina: null, cena: 2.450},
          {id: '1083085', opis: 'ARX SPIN DK POG.860 D14,5',kolicina: null, cena: 2.900},
          {id: '1083117', opis: 'ARX SPIN DK POG.340 D14,5',kolicina: null, cena: 2.150},
          {id: '1083163', opis: 'ARX SPIN ROB.POG.M180 1R',kolicina: null, cena: 2.150},
          {id: '1083164', opis: 'ARX SPIN ROB.POG.M500 1R',kolicina: null, cena: 2.400},
          {id: '1083165', opis: 'ARX SPIN ROB.POG.M900 2R',kolicina: null, cena: 2.900},
          {id: '1083166', opis: 'ARX SPIN ROB.POG.M1400 3R',kolicina: null, cena: 4.100},
          {id: '1083167', opis: 'ARX SPIN ROB.POG.M1900 4R',kolicina: null, cena: 4.800},
          {id: '1083168', opis: 'ARX SPIN ROB.POG.M2400 4R',kolicina: null, cena: 6.600},
          {id: '1083183', opis: 'ARX SPIN DK PRIHV.VEKA',kolicina: null, cena: 0.600},
          {id: '1083190-L', opis: 'ARX SPIN PRIHVATNIK DKI VEKA-LEVI',kolicina: null, cena: 0.850},
          {id: '1083190-D', opis: 'ARX SPIN PRIHVATNIK DKI VEKA-DESNI',kolicina: null, cena: 0.850},
          {id: '1083202', opis: 'ARX SPIN PRIHVATNIK VEKA',kolicina: null, cena: 0.220},
          {id: '1083207', opis: 'ARX SPIN PRIHVATNIK NLU',kolicina: null, cena: 0.400},
          {id: '1083224', opis: 'ARX SPIN PRIH.RINGLE VEKA',kolicina: null, cena: 0.650},
          {id: '1083242', opis: 'ARX SPIN UGAO SARKA 130KG',kolicina: null, cena: 0.750},
          {id: '1083247', opis: 'ARX SPIN UGAONI LEZ.100KG',kolicina: null, cena: 0.850},
          {id: '1083252', opis: 'ARX SPIN DK RINGLA NLU',kolicina: null, cena: 2.550},
          {id: '1083253', opis: 'ARX SPIN DK RINGLA+PRIH.NLU',kolicina: null, cena: 2.550},
          {id: '1083254', opis: 'ARX SPIN RINGLA BEZ PRIH.',kolicina: null, cena: 1.900},
          {id: '1083255', opis: 'ARX SPIN DK PRIK.FFH MANJE OD 1000',kolicina: null, cena: 1.000},
          {id: '1083256', opis: 'ARX SPIN DK PRIK.FFH VEĆI OD 1000',kolicina: null, cena: 1.000},
          {id: '1083258', opis: 'ARX SPIN POD.GON.400 1R',kolicina: null, cena: 2.200},
          {id: '1083259', opis: 'ARX SPIN POD.GON.600 1R',kolicina: null, cena: 2.400},
          {id: '1083262', opis: 'ARX SPIN LAZ.MAK12/20-13D',kolicina: null, cena: 2.750},
          {id: '1083263', opis: 'ARX SPIN LAZ.MAK12/20-13L',kolicina: null, cena: 2.750},
          {id: '1083264', opis: 'ARX SPIN LAŽNA MAKAZA 12/20-9 D',kolicina: null, cena: 2.750},
          {id: '1083265', opis: 'ARX SPIN LAŽNA MAKAZA 12/20-9 L',kolicina: null, cena: 2.750},
          {id: '1083268', opis: 'ARX SPIN SR.SARKA12/20-13',kolicina: null, cena: 1.900},
          {id: '1083269', opis: 'ARX SPIN SREDNJA ŠARKA 12/20-9 NA',kolicina: null, cena: 1.900}, 
          {id: '1083271', opis: 'ARX SPIN POK.KAP.UGAO9016',kolicina: null, cena: 0.130}, 
          {id: '1083272', opis: 'ARX SPIN POK.KAP.UGAO ŠARKE-8019',kolicina: null, cena: 0.120},
          {id: '1083273', opis: 'ARX SPIN POK.KAP.UGAOLEZ9016',kolicina: null, cena: 0.180},
          {id: '1083274', opis: 'ARX SPIN POK.KAP.UGAO LEŽ.-8019',kolicina: null, cena: 0.170},
          {id: '1083275', opis: 'ARX SPIN POK.K.LEZAJ 9016',kolicina: null, cena: 0.100},
          {id: '1083276', opis: 'ARX SPIN POK.KAP.LEŽ.RAVNA-8019',kolicina: null, cena: 0.090},
          {id: '1083277', opis: 'ARX SPIN POK.K.LE.MAK.9016',kolicina: null, cena: 0.170},
          {id: '1083278', opis: 'ARX SPIN POK.KAP.LEŽ.MAKAZA-8019',kolicina: null, cena: 0.180},
          {id: '1083279', opis: 'ARX SPIN POK.K.MAK.9016',kolicina: null, cena: 0.100},
          {id: '1083280', opis: 'ARX SPIN POK.KAP.MAKAZA-8019',kolicina: null, cena: 0.100},
          {id: '1083296', opis: 'ARX SPIN PRITEZAC KRILNI',kolicina: null, cena: 0.500},
          {id: '1083297', opis: 'ARX SPIN PRITEZAC OKVIRNI',kolicina: null, cena: 0.400},
          {id: '1083305', opis: 'ARX SPIN ŠNAPER',kolicina: null, cena: 0.250},
          {id: '1083306', opis: 'ARX SPIN ŠNAPER VEKA TOPLINE',kolicina: null, cena: 1.600},
          {id: '1087793', opis: 'ARX SPIN POK.KAP.UGAO ŠARKE CRNA',kolicina: null, cena: 0.120},
          {id: '1087794', opis: 'ARX SPIN POK.KAP.UGAO LEŽAJA CRNA',kolicina: null, cena: 0.180},
          {id: '1087795', opis: 'ARX SPIN POK.KAP.UGAO LEŽ.RAVNA CRNA',kolicina: null, cena: 0.100},
          {id: '1087796', opis: 'ARX SPIN POK.KAP.LEŽ.MAKAZA CRNA',kolicina: null, cena: 0.180},
          {id: '1087797', opis: 'ARX SPIN POK.KAP.MAKAZA CRNA',kolicina: null, cena: 0.100},
          {id: '1088473', opis: 'ARX SPIN DK POG.720 D14,5',kolicina: null, cena: 2.500},
          {id: '1088474', opis: 'ARX SPIN DK POG.1120D14,5',kolicina: null, cena: 3.250},
          {id: '1088475', opis: 'ARX SPIN DK POG.MEH.M1520',kolicina: null, cena: 4.050},
          {id: '1088476', opis: 'ARX SPIN DK POG.MEH.M1720',kolicina: null, cena: 4.500},
          {id: '1088477', opis: 'ARX SPIN DK POG.2120D14,5',kolicina: null, cena: 5.350},
          {id: '1093907', opis: 'ARX SPIN PREN.OPT.KRILNI DEO',kolicini: null, cena: 1.100},
          {id: '1093908', opis: 'ARX SPIN PRITEZAČ 18mm',kolicina: null, cena: 0.350},
          {id: '1093922', opis: 'ARX SPIN POK.KAP.UGAO LEŽAJA SREBRNA',kolicina: null, cena: 0.350},
          {id: '1093923', opis: 'ARX SPIN POK.KAP.LEŽ.RAVNA SREBRNA',kolicina: null, cena: 0.300},
          {id: '1093926', opis: 'ARX SPIN POK.KAP.LEŽ.MAKAZA SREBRNA',kolicina: null, cena: 0.450},
          {id: '1093928', opis: 'ARX SPIN POK.KAP.MAKAZA SREBRNA',kolicina: null, cena: 0.300},
          {id: '1097951', opis: 'ARX SPIN DK PRIHVATNIK L/D',kolicina: null, cena: 0.600},
          {id: '1097952', opis: 'ARX SPIN  PRIHVATNIK ALU',kolicina: null, cena: 0.300},
          {id: '1097953', opis: 'ARX SPIN  PRIH.RINGLE ALU',kolicina: null, cena: 0.650},
          {id: '1097954', opis: 'ARX SPIN PRITEZAČ ALU',kolicina: null, cena: 0.400},
          {id: '1098116', opis: 'ARX SPIN POGONSKI ŠTULP M 400',kolicina: null, cena: 2.950},
          {id: '1098120', opis: 'ARX SPIN POGONSKI ŠTULP M 720',kolicina: null, cena: 4.00},
          {id: '1098121', opis: 'ARX SPIN POGONSKI ŠTULP M 720/8',kolicina: null, cena: 3.700},
          {id: '1098122', opis: 'ARX SPIN POGONSKI ŠTULP M 1120',kolicina: null, cena: 4.550},
          {id: '1098123', opis: 'ARX SPIN POGONSKI ŠTULP M 1520',kolicina: null, cena: 5.500},
          {id: '1098124', opis: 'ARX SPIN POGONSKI ŠTULP M 1720',kolicina: null, cena: 6.100},
          {id: '1098125', opis: 'ARX SPIN POGONSKI ŠTULP M 2120',kolicina: null, cena: 7.400},
          {id: '1099152', opis: 'ARX SPIN NAGIBNE MAKAZE',kolicina: null, cena: 2.050},
          {id: '1100983', opis: 'ARX SPIN UGAONIK 1RS',kolicina: null, cena: 2.250},
          {id: '1101239', opis: 'ARX SPIN UGAONA ŠARKA FALCNA 12/20-9 L',kolicina: null, cena: 2.300},
          {id: '1101241', opis: 'ARX SPIN UGAONA ŠARKA FALCNA 12/20-9 D',kolicina: null, cena: 2.300},
          {id: '1101244', opis: 'ARX SPIN UGAONA ŠARKA FALCNA 12/20-13L',kolicina: null, cena: 2.300},
          {id: '1101245', opis: 'ARX SPIN UGAONA ŠARKA FALCNA 12/20-13D',kolicina: null, cena: 2.300},
          {id: '1102621', opis: 'ARX SPIN NASTAVAK ŠTULP',kolicina: null, cena: 2.050},
          {id: '1105332', opis: 'ARX SPIN POK.UGAO ŠARKE FALCNE L BELA',kolicina: null, cena: 0.130},
          {id: '1105333', opis: 'ARX SPIN POK.UGAO ŠARKE FALCNE D BELA',kolicina: null, cena: 0.130},
          {id: '1105442', opis: 'ARX SPIN POK.KAP.FALCNE ŠARKE.L RAL8019',kolicina: null, cena: 0.120},
          {id: '1105443', opis: 'ARX SPIN POK.KAP.FALCNE ŠARKE.D RAL8019',kolicina: null, cena: 0.120},
          {id: '1105444', opis: 'ARX SPIN POK.KAP.FALCNE ŠARKE.L-CRNA',kolicina: null, cena: 0.130},
          {id: '1105445', opis: 'ARX SPIN POK.KAP.FALCNE ŠARKE.D-CRNA',kolicina: null, cena: 0.130},
          {id: '1105446', opis: 'ARX SPIN POK.UGAO ŠARKE FALCNE L SREBRNA',kolicina: null, cena: 0.450},
          {id: '1105447', opis: 'ARX SPIN POK.UGAO ŠARKE FALCNE D SREBRNA',kolicina: null, cena: 0.450},
          {id: 'HOPE340B', opis: 'RUCICA HOPE BELA', kolicina: null, cena: 1.3},
          {id: 'HOPE340-8017', opis: 'RUCICA HOPE BRAON - 8017', kolicina: null, cena: 1.3},
          {id: 'ITAL340C-SIG', opis: 'ITAL RUCICA CRNA SIGURNOSNA HEW YORK E42', kolicina: null, cena: 3.6},
          {id: 'ITAL340B-SIG', opis: 'ITAL RUCICA BELA SIGURNOSNA HEW YORK E42', kolicina: null, cena: 3}
          ];
  constructor() { }
}
