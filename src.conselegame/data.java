/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rentalconsolegame;

import java.util.ArrayList;
/**
 *
 * @author LENOVO
 */
public class Data extends Cari{
    ArrayList<Cari> dataMember = new ArrayList<Cari>();

    private String idMember;
    private String namaMember;
    private String jenisMember;

    Data(String idMember, String namaMember, String jenisMember) {
        super(idMember, namaMember, jenisMember);
    }

    public Cari cariMember(String idMember) {
        Cari hasil = null;

        for (Cari member : this.dataMember) {
            if (member.getIDMember().equals(idMember)) {
                hasil = member;
                break;
            }
        }

        return hasil;
    }

    public void tambahMember(String idMember, String namaMember, String jenisMember) {
        Cari member = new Cari(idMember, namaMember, jenisMember);
        dataMember.add(member);
    }

    public void checkMember(Cari m) {
        System.out.println("\nID    Member : " + m.getIDMember());
        System.out.println("Nama  Member : " + m.getNamaMember());
        System.out.println("Jenis Member : " + m.getJenisMember());
    }
}