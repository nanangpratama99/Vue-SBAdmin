<template>

    <div>
        <!-- Button -->
        <button type="submit" class="btn btn-primary my-3">Tambah Data</button>
        <div>
    <!-- Form -->
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="name">Nama Lengkap</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Masukkan Nama Lengkap"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="nik">NIK</label>
          <input
            type="text"
            class="form-control"
            id="nik"
            placeholder="Masukkan No NIK"
          />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="tempat_lahir">Tempat Lahir</label>
          <input type="text" class="form-control" id="tempat_lahir" />
        </div>
        <div class="form-group col-md-4">
          <label for="agama">Agama</label>
          <select id="agama" class="form-control">
            <option selected>Choose...</option>
            <option>Islam</option>
            <option>Kristem</option>
            <option>Hindu</option>
            <option>Budha</option>
            <option>Konghuchu</option>
            <option>Atheis</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="jenis_kelamin">Jenis Kelamin</label>
          <select id="jenis_kelamin" class="form-control">
            <option selected>Choose...</option>
            <option value="Laki Laki">Laki - Laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="jenis_pekerjaan">Jenis Pekerjaan</label>
          <input type="text" class="form-control" id="jenis_pekerjaan" />
        </div>
        <div class="form-group col-md-4">
          <label for="pendidikan">Pendidikan</label>
          <select id="pendidikan" class="form-control">
            <option selected>Choose...</option>
            <option value="SD">SD</option>
            <option value="SMP">SMP</option>
            <option value="SMA Sederajat">SMA Sederajat</option>
            <option value="D3">D3</option>
            <option value="S1">S1</option>
            <option value="S2">S2</option>
            <option value="S3">S3 Master</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Golongan Darah</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>A</option>
            <option>AB</option>
            <option>B</option>
            <option>O</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="Masukkan Alamat Lengkap"
        />
      </div>

      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck"> Check me out </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
  </div>
    </div>
  
</template>

<script>
export default {};
</script>

<style>
</style>