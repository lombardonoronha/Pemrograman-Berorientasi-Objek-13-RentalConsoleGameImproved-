/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rentalconsolegame;

/**
 *
 * @author LENOVO
 */
public class Cari {
    private String idMember;
    private String namaMember;
    private String jenisMember;

    public Cari(String idMember, String namaMember, String jenisMember) {
        this.idMember = idMember;
        this.namaMember = namaMember;
        this.jenisMember = jenisMember;
    }

    public String getIDMember() {
        return idMember;
    }

    public String getNamaMember() {
        return namaMember;
    }

    public String getJenisMember() {
        return jenisMember;
    }
}