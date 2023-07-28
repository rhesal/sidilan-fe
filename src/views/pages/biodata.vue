<script setup>

</script>

<template>
    <div class="text-center my-3">
        <h3>Selamat Datang, User!</h3>
    </div>
    <div class="container bg-white py-1 mb-5 rounded" style="width: 70rem;">
        <div class="h4 pt-3 px-2" style="font-family: Verdana, Geneva, Tahoma, sans-serif;">Biodata</div>
        <div class="card my-3 mx-2 w-auto bg-warning-subtle">
            <div class="card-body">
                <p class="card-text text-warning-emphasis">Pastikan bahwa isian formulir biodata Anda benar sebelum mendaftar pelatihan. Kesalahan data di sertifikat pelatihan yang telah terbit tidak dapat dikoreksi.</p>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-warning" @click="showModal = true">
                        <font-awesome-icon icon="pencil" size="lg"/><span class="mx-2">Edit Biodata</span> 
                    </button>
                </div>
            </div>
        </div>
        <fieldset class="mx-2 border border-primary rounded position-relative">
            <legend class="w-auto h6 bg-white position-absolute top-0 start-0 translate-middle" style="margin-left: 65px; font-weight: 600;">Data Pribadi</legend>
            <div class="my-4"></div>
            <div class="row">
                <div class="col-md-3 mb-3">
                    <span class="mx-4">Pas Foto</span>
                    <img src="" class="img-thumbnail mx-4 d-block"  alt="Pas Foto">
                </div>
                <div class="col-md-4">
                    <span class="">Spesimen Tanda Tangan</span>
                    <img src="" class="img-thumbnail d-block"  alt="TTD">
                    <div class="btn-group my-3" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-warning">
                        <font-awesome-icon icon="pencil" size="lg"/><span class="mx-2">Edit Tanda Tangan</span> 
                    </button>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 mb-3">
                    <span class="mx-4" style="font-weight: bold;">NIK</span>
                    <p class="mx-4">-</p>
                </div>
                <div class="col-md">
                    <span class="" style="font-weight: bold;">Nama Lengkap</span>
                    <p class="">-</p>
                </div>
                <div class="col-md-2">
                    <span class="" style="font-weight: bold;">Gelar (depan)</span>
                    <p class="">-</p>
                </div>
                <div class="col-md-2">
                    <span class="" style="font-weight: bold;">Gelar (belakang)</span>
                    <p class="">-</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 mb-3">
                    <span class="mx-4" style="font-weight: bold;">Nama Panggilan</span>
                    <p class="mx-4">-</p>
                </div>
                <div class="col-md-3">
                    <span class="" style="font-weight: bold;">Tempat Lahir</span>
                    <p class="">-</p>
                </div>
                <div class="col-md-2">
                    <span class="" style="font-weight: bold;">Tanggal Lahir</span>
                    <p class="">-</p>
                </div>
                <div class="col-md-2">
                    <span class="" style="font-weight: bold;">Jenis Kelamin</span>
                    <p class="">-</p>
                </div>
                <div class="col-md-2">
                    <span class="" style="font-weight: bold;">Agama</span>
                    <p class="">-</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 mb-3">
                    <span class="mx-4" style="font-weight: bold;">Pendidikan</span>
                    <p class="mx-4">-</p>
                </div>
                <div class="col-md-9">
                    <span class="" style="font-weight: bold;">Jurusan</span>
                    <p class="">-</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-9 mb-3">
                    <span class="mx-4" style="font-weight: bold;">Alamat Rumah</span>
                    <p class="mx-4">-</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 mb-3">
                    <span class="mx-4" style="font-weight: bold;">Desa/Kelurahan</span>
                    <p class="mx-4">-</p>
                </div>
                <div class="col-md-3">
                    <span class="" style="font-weight: bold;">Kecamatan/Distrik</span>
                    <p class="">-</p>
                </div>
                <div class="col-md-3">
                    <span class="" style="font-weight: bold;">Kabupaten/Kota</span>
                    <p class="">-</p>
                </div>
                <div class="col-md-3">
                    <span class="" style="font-weight: bold;">Provinsi</span>
                    <p class="">-</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 mb-3">
                    <span class="mx-4" style="font-weight: bold;">No. HP</span>
                    <p class="mx-4">-</p>
                </div>
                <div class="col-md-3">
                    <span class="" style="font-weight: bold;">E-mail</span>
                    <p class="">-</p>
                </div>
            </div>
        </fieldset>

        <fieldset class="my-4 mx-2 border border-primary rounded position-relative">
            <legend class="w-auto h6 bg-white position-absolute top-0 start-0 translate-middle" style="margin-left: 65px; font-weight: 600;">Data Pekerjaan</legend>
            <div class="my-4"></div>
            <div class="row">
                <div class="col-md mb-3">
                    <span class="mx-4" style="font-weight: bold;">Status Kepegawaian</span>
                    <p class="mx-4">-</p>
                </div>
                <div class="col-md">
                    <span class="" style="font-weight: bold;">Golongan</span>
                    <p class="">-</p>
                </div>
                <div class="col-md">
                    <span class="" style="font-weight: bold;">NIP/NRP</span>
                    <p class="">-</p>
                </div>
                <div class="col-md">
                    <span class="" style="font-weight: bold;">Jabatan</span>
                    <p class="">-</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 mb-3">
                    <span class="mx-4" style="font-weight: bold;">Jenis Nakes</span>
                    <p class="mx-4">-</p>
                </div>
                <div class="col-md-3">
                    <span class="" style="font-weight: bold;">Nomor STR</span>
                    <p class="">-</p>
                </div>
                <div class="col-md-3">
                    <span class="" style="font-weight: bold;">Tipe Pegawai</span>
                    <p class="">-</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md mb-3">
                    <span class="mx-4" style="font-weight: bold;">Satuan Kerja</span>
                    <p class="mx-4">-</p>
                </div>
                <div class="col-md">
                    <span class="" style="font-weight: bold;">Unit Kerja</span>
                    <p class="">-</p>
                </div>
                <div class="col-md">
                    <span class="" style="font-weight: bold;">Bagian</span>
                    <p class="">-</p>
                </div>
                <div class="col-md">
                    <span class="" style="font-weight: bold;">Subbagian</span>
                    <p class="">-</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md mb-3">
                    <span class="mx-4" style="font-weight: bold;">Alamat Kantor</span>
                    <p class="mx-4">-</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md mb-3">
                    <span class="mx-4" style="font-weight: bold;">Desa/Kelurahan</span>
                    <p class="mx-4">-</p>
                </div>
                <div class="col-md">
                    <span class="" style="font-weight: bold;">Kecamatan/Distrik</span>
                    <p class="">-</p>
                </div>
                <div class="col-md">
                    <span class="" style="font-weight: bold;">Kabupaten/Kota</span>
                    <p class="">-</p>
                </div>
                <div class="col-md">
                    <span class="" style="font-weight: bold;">Provinsi</span>
                    <p class="">-</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md mb-3">
                    <span class="mx-4" style="font-weight: bold;">No. Telepon</span>
                    <p class="mx-4">-</p>
                </div>
            </div>
        </fieldset>
    </div>

    <div>
        <Modal v-if="showModal" :title="modalTitle" @close="showModal = false">
            <!-- Konten di dalam modal -->
            <div class="card my-4 mx-2 w-auto bg-info-subtle">
                <div class="card-body">
                        <p class="card-text text-info-emphasis">Semua kolom isian wajib terisi. Jika kosong, isi dengan tanda "-".</p>
                </div>
            </div>
            <fieldset class="mx-2 border border-primary rounded position-relative">
                <legend class="w-auto h6 bg-white position-absolute top-0 start-0 translate-middle" style="margin-left: 65px; font-weight: 600;">Data Pribadi</legend>
                <div class="my-4"></div>
                <div class="row mx-4">
                    <div class="col-md-3 mb-3">
                        <span class="">Pas Foto</span>
                        <img src="" class="img-thumbnail d-block"  alt="Pas Foto">
                    </div>
                    <div class="col-md-9">
                        <span class="">Foto Peserta (pas foto formal, ukuran 3×4, background merah)</span>
                        <input type="file" class="form-control w-75" @change="handleFileChange($event)">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mb-3 mx-4">
                        <span class="" style="font-weight: bold;">NIK</span>
                        <input type="text" name="" id="" class="form-control">
                    </div>
                    <div class="col-md-6 mb-3">
                        <span class="" style="font-weight: bold;">Nama Lengkap</span>
                        <input type="text" name="" id="" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mb-3 mx-4">
                        <span class="" style="font-weight: bold;">Gelar (depan)</span>
                        <input type="text" name="" id="" class="form-control">
                    </div>
                    <div class="col-md-3">
                        <span class="" style="font-weight: bold;">Gelar (belakang)</span>
                        <input type="text" name="" id="" class="form-control">
                    </div>
                    <div class="col-md-3" style="padding-left: 40px;">
                        <span class="" style="font-weight: bold;">Nama Panggilan</span>
                        <input type="text" name="" id="" class="form-control">
                    </div>
                </div>
                <div class="row"> 
                    <div class="col-md-3 mb-3 mx-4">
                        <span class="" style="font-weight: bold;">Tempat Lahir</span>
                        <input type="text" name="" id="" class="form-control">
                    </div>
                    <div class="col-md-2">
                        <span class="" style="font-weight: bold;">Tanggal Lahir</span>
                        <input type="date" name="" id="" class="form-control">
                    </div>
                    <div class="col-md-2" style="padding-left: 40px;">
                        <span class="" style="font-weight: bold;">Jenis Kelamin</span>
                        <select name="" id="" class="form-select">
                            <option value="Laki-laki" class="form-control">Laki-laki</option>
                            <option value="Perempuan" class="form-control">Perempuan</option>
                        </select>
                    </div>
                    <div class="col-md-2" style="padding-left: 40px;">
                        <span class="" style="font-weight: bold;">Agama</span>
                        <select name="" id="" class="form-select">
                            <option value="Islam" class="form-control">Islam</option>
                            <option value="Kristen" class="form-control">Kristen</option>
                            <option value="Katolik" class="form-control">Katolik</option>
                            <option value="Hindu" class="form-control">Hindu</option>
                            <option value="Buddha" class="form-control">Buddha</option>
                            <option value="Konghucu" class="form-control">Konghucu</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mb-3 mx-4">
                        <span class="" style="font-weight: bold;">Pendidikan</span>
                        <select name="" id="" class="form-select">
                            <option value="Islam" class="form-control">Islam</option>
                            <option value="Kristen" class="form-control">Kristen</option>
                            <option value="Katolik" class="form-control">Katolik</option>
                            <option value="Hindu" class="form-control">Hindu</option>
                            <option value="Buddha" class="form-control">Buddha</option>
                            <option value="Konghucu" class="form-control">Konghucu</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <span class="" style="font-weight: bold;">Jurusan Pendidikan</span>
                        <input type="text" name="" id="" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-9 mb-3">
                        <span class="mx-4" style="font-weight: bold; font-size: 18px;">Alamat Rumah</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mb-3 mx-4">
                        <span class="" style="font-weight: bold;">Provinsi</span>
                        <select name="" id="" class="form-select">
                            <option value="-" class="form-control">-</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <span class="" style="font-weight: bold;">Kabupaten/Kota</span>
                        <select name="" id="" class="form-select">
                            <option value="-" class="form-control">-</option>
                        </select>
                    </div>
                    <div class="col-md-3" style="padding-left: 40px;">
                        <span class="" style="font-weight: bold;">Kecamatan/Distrik</span>
                        <select name="" id="" class="form-select">
                            <option value="-" class="form-control">-</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-9 mb-3" style="padding-left: 35px;">
                        <span class="" style="font-weight: bold;">Desa/Kelurahan</span>
                        <input type="text" name="" id="" class="form-control" style="width: 106.5%;">
                    </div>   
                </div>
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <span class="mx-4" style="font-weight: bold;">No. HP</span>
                        <p class="mx-4">-</p>
                    </div>
                    <div class="col-md-3">
                        <span class="" style="font-weight: bold;">E-mail</span>
                        <p class="">-</p>
                    </div>
                </div>
        </fieldset>
        </Modal>
    </div>
</template>

<script>
import Modal from '../modal/modalpeserta.vue';

export default {
    components: {
    Modal
    },
    data() {
    return {
        showModal: false,
        modalTitle: 'Biodata'
    };
    }
};
</script>