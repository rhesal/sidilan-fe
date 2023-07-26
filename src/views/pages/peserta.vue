<script setup>

</script>

<template>
    <div class="text-center my-3">
        <h3>Selamat Datang, User!</h3>
    </div>
    <div class="container bg-white py-1 px-4 my-4 rounded" style="width: 70rem;">
        <div class="callout callout-info">
            <span>Pendaftaran Peserta</span>
        </div>
        <div class="row mb-3">
            <div class="col-lg-3 col-md-4">
                <router-link :to="{ name: 'pages.biodata' }" class="text-decoration-none text-black">
                    <div type="button" class="card-body card-body-hover p-3 border border-info rounded">
                        <div class="row align-items-center">
                            <div class="col-3 text-center">
                                <div class="menu-icon p-2">
                                    <font-awesome-icon icon="user" size="lg"/>
                                </div>
                            </div>
                            <div class="col pl-0">Biodata</div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-lg-3 col-md-4">
                <router-link :to="{ name: '' }" class="text-decoration-none text-black">
                    <div type="button" class="card-body card-body-hover p-3 border border-info rounded">
                        <div class="row align-items-center">
                            <div class="col-3 text-center">
                                <div class="menu-icon p-2">
                                    <font-awesome-icon icon="file-arrow-up" size="lg"/>
                                </div>
                            </div>
                            <div class="col pl-0">Pendaftaran</div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-lg-3 col-md-4">
                <router-link :to="{ name: '' }" class="text-decoration-none text-black">
                    <div type="button" class="card-body card-body-hover p-3 border border-info rounded">
                        <div class="row align-items-center">
                            <div class="col-3 text-center">
                                <div class="menu-icon p-2">
                                    <font-awesome-icon icon="lightbulb" size="lg"/>
                                </div>
                            </div>
                            <div class="col pl-0">Usulan Pelatihan</div>
                        </div>
                    </div>
                </router-link>  
            </div>
        </div>
        <div class="callout callout-info">
            <span>Pelaksanaan Pelatihan</span>
        </div>
        <div class="row mb-3">
            <div class="col-lg-3 col-md-4">
                <router-link :to="{ name: '' }" class="text-decoration-none text-black">
                    <div type="button" class="card-body card-body-hover p-3 border border-info rounded">
                        <div class="row align-items-center">
                            <div class="col-3 text-center">
                                <div class="menu-icon p-2">
                                    <font-awesome-icon icon="person-chalkboard" size="lg"/>
                                </div>
                            </div>
                            <div class="col pl-0">Pelatihan Saya</div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-lg-3 col-md-4">
                <router-link :to="{ name: '' }" class="text-decoration-none text-black">
                    <div type="button" class="card-body card-body-hover p-3 border border-info rounded">
                        <div class="row align-items-center">
                            <div class="col-3 text-center">
                                <div class="menu-icon p-2">
                                    <font-awesome-icon icon="book-open-reader" size="lg"/>
                                </div>
                            </div>
                            <div class="col pl-0">Lentera (E-Learning)</div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-lg-3 col-md-4">
                <router-link :to="{ name: '' }" class="text-decoration-none text-black">
                    <div type="button" class="card-body card-body-hover p-3 border border-info rounded">
                        <div class="row align-items-center">
                            <div class="col-3 text-center">
                                <div class="menu-icon p-2">
                                    <font-awesome-icon icon="arrow-up-right-from-square" size="lg"/>
                                </div>
                            </div>
                            <div class="col pl-0">Plataran Sehat</div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-lg-3 col-md-4">
                <router-link :to="{ name: '' }" class="text-decoration-none text-black">
                    <div type="button" class="card-body card-body-hover p-3 border border-info rounded">
                        <div class="row align-items-center">
                            <div class="col-3 text-center">
                                <div class="menu-icon p-2">
                                    <font-awesome-icon icon="arrow-up-right-from-square" size="lg"/>
                                </div>
                            </div>
                            <div class="col pl-0">LJJ Kesehatan</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-lg-3 col-md-4">
                <router-link :to="{ name: '' }" class="text-decoration-none text-black">
                    <div type="button" class="card-body card-body-hover p-3 border border-info rounded">
                        <div class="row align-items-center">
                            <div class="col-3 text-center">
                                <div class="menu-icon p-2">
                                    <font-awesome-icon icon="signature" size="lg"/>
                                </div>
                            </div>
                            <div class="col pl-0">Presensi Mandiri</div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-lg-3 col-md-4">
                <router-link :to="{ name: '' }" class="text-decoration-none text-black">
                    <div type="button" class="card-body card-body-hover p-3 border border-info rounded">
                        <div class="row align-items-center">
                            <div class="col-3 text-center">
                                <div class="menu-icon p-2">
                                    <font-awesome-icon icon="pencil" size="lg"/>
                                </div>
                            </div>
                            <div class="col pl-0">Evaluasi</div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-lg-3 col-md-4">
                <router-link :to="{ name: '' }" class="text-decoration-none text-black">
                    <div type="button" class="card-body card-body-hover p-3 border border-info rounded">
                        <div class="row align-items-center">
                            <div class="col-3 text-center">
                                <div class="menu-icon p-2">
                                    <font-awesome-icon icon="award" size="lg"/>
                                </div>
                            </div>
                            <div class="col pl-0">Sertifikat</div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-lg-3 col-md-4">
                <router-link :to="{ name: '' }" class="text-decoration-none text-black">
                    <div type="button" class="card-body card-body-hover p-3 border border-info rounded">
                        <div class="row align-items-center">
                            <div class="col-3 text-center">
                                <div class="menu-icon p-2">
                                    <font-awesome-icon icon="circle-exclamation" size="lg"/>
                                </div>
                            </div>
                            <div class="col pl-0">Keluhan</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="callout callout-info">
            <span>Fasilitas</span>
        </div>
        <div class="row mb-3">
            <div class="col-lg-3 col-md-4">
                <router-link :to="{ name: '' }" class="text-decoration-none text-black">
                    <div type="button" class="card-body card-body-hover p-3 border border-info rounded">
                        <div class="row align-items-center">
                            <div class="col-3 text-center">
                                <div class="menu-icon p-2">
                                    <font-awesome-icon icon="bed" size="lg"/>
                                </div>
                            </div>
                            <div class="col pl-0">Reservasi Kamar</div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-lg-3 col-md-4">
                <router-link :to="{ name: '' }" class="text-decoration-none text-black">
                    <div type="button" class="card-body card-body-hover p-3 border border-info rounded">
                        <div class="row align-items-center">
                            <div class="col-3 text-center">
                                <div class="menu-icon p-2">
                                    <font-awesome-icon icon="building" size="lg"/>
                                </div>
                            </div>
                            <div class="col pl-0">Reservasi Ruangan</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <div class="callout callout-info">
            <span>Informasi</span>
        </div>
        <div class="row mb-3">
            <div class="col-lg-3 col-md-4">
                <router-link :to="{ name: '' }" class="text-decoration-none text-black">
                    <div type="button" class="card-body card-body-hover p-3 border border-info rounded">
                        <div class="row align-items-center">
                            <div class="col-3 text-center">
                                <div class="menu-icon p-2">
                                    <font-awesome-icon icon="comments" size="lg"/>
                                </div>
                            </div>
                            <div class="col pl-0">Pesan</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>