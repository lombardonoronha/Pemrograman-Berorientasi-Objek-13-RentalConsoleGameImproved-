/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rentalconsolegame;

import java.time.LocalDate;
import java.time.Period;
import java.util.Scanner;

/**
 *
 * @author LENOVO
 */
public class RentalConsoleGame {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        String idMember = null;
        String namaMember = null;
        String jenisMember = null;
        int tanggalPeminjaman;
        int bulanPeminjaman;
        int tahunPeminjaman;
        int tanggalKembali;
        int bulanKembali;
        int tahunKembali;
        int sewa;
        int harga = 0;
        float diskon;
        int poin = 0;
        int pulsa = 0;
        int cashback = 0;

        Scanner input = new Scanner(System.in);

        Data d = new Data(idMember, namaMember, jenisMember);
        d.tambahMember("M001", "Mr.X", "Silver");
        d.tambahMember("M002", "Mr.Y", "Gold");
        d.tambahMember("M003", "Mr.Z", "Platinum");

        System.out.print("Masukkan ID Member      : ");
        idMember = input.nextLine();
        System.out.print("Masukkan Tanggal Pinjam : ");
        tanggalPeminjaman = input.nextInt();
        System.out.print("Masukkan Bulan Pinjam   : ");
        bulanPeminjaman = input.nextInt();
        System.out.print("Masukkan Tahun Pinjam   : ");
        tahunPeminjaman = input.nextInt();
        System.out.print("Masukkan Tanggal Kembali: ");
        tanggalKembali = input.nextInt();
        System.out.print("Masukkan Bulan Kembali  : ");
        bulanKembali = input.nextInt();
        System.out.print("Masukkan Tahun Kembali  : ");
        tahunKembali = input.nextInt();

        Cari c = d.cariMember(idMember);
        if (c != null) {
            d.checkMember(c);
            System.out.println("\nTanggal Pinjam  : " + tanggalPeminjaman + "-" + bulanPeminjaman + "-" + tahunPeminjaman);
            System.out.println("Tanggal Kembali : " + tanggalKembali + "-" + bulanKembali + "-" + tahunKembali);

            LocalDate from = LocalDate.of(tahunPeminjaman, bulanPeminjaman, tanggalPeminjaman);
            LocalDate to = LocalDate.of(tahunKembali, bulanKembali, tanggalKembali);
            Period p = Period.between(from, to);

            System.out.println("Lama Sewa       : " + p.getDays() + " Hari\n");

            switch (c.getJenisMember()) {
                case "Silver":
                    {
                        int waktu = (p.getDays() + (p.getMonths() * 30) + (p.getYears() * 365));
                        sewa = 25000 * waktu;
                        diskon = sewa / 100;
                        harga = (int)((sewa * (p.getDays() + (p.getMonths() * 30) + (p.getYears() * 365))) - diskon);
                        poin = waktu * 1;
                        break;
                    }
                case "Gold":
                    {
                        int waktu = (p.getDays() + (p.getMonths() * 30) + (p.getYears() * 365));
                        sewa = 30000 * waktu;
                        diskon = sewa / 50;
                        harga = (int)((sewa * (p.getDays() + (p.getMonths() * 30) + (p.getYears() * 365))) - diskon);
                        poin = waktu * 5;
                        cashback = 5000;
                        break;
                    }
                case "Platinum":
                    {
                        int waktu = (p.getDays() + (p.getMonths() * 30) + (p.getYears() * 365));
                        sewa = 45000 * waktu;
                        diskon = 0.03 f * sewa;
                        harga = (int)((sewa * (p.getDays() + (p.getMonths() * 30) + (p.getYears() * 365))) - diskon);
                        poin = waktu * 10;
                        cashback = 10000;
                        pulsa = 5000 * waktu;
                        break;
                    }
                default:
                    break;
            }

            System.out.println("Total Sewa      : Rp." + harga);
            System.out.println("Jumlah Poin     : " + poin);
            System.out.println("Jumlah Casback  : Rp." + cashback);
            System.out.println("Bonus Pulsa     : Rp." + pulsa);
        }
    }

}