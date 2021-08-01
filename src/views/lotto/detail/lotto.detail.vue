<template>
  <b-container class="line-space-y">
    <b-row>
      <b-col md="6">
        <b-row>
          <b-col md="12">
            <h4>2 ตัว</h4>
            <hr />
          </b-col>
          <b-col md="12">
            <table
              class="small md-1 striped hover"
              style="width: 100%"
              v-if="ready"
            >
              <tr style="text-align: center;">
                <th>เลข</th>
                <th>บน</th>
                <th>ล่าง</th>
                <th>รวม</th>
                <th>Action</th>
              </tr>
              <template v-for="(item, index) in lotto.dataTwo">
                <tr v-bind:key="index">
                  <td>
                    <b-form-input
                      required
                      size="sm"
                      v-model="item.number"
                      type="text"
                      maxlength="2"
                      placeholder="เลข"
                    ></b-form-input>
                  </td>
                  <td>
                    <b-form-input
                      required
                      size="sm"
                      v-model="item.top"
                      type="number"
                      v-on:change="calculateTwo(index)"
                      placeholder="บน"
                    ></b-form-input>
                  </td>
                  <td>
                    <b-form-input
                      required
                      size="sm"
                      v-model="item.lower"
                      v-on:change="calculateTwo(index)"
                      type="number"
                      placeholder="ล่าง"
                    ></b-form-input>
                  </td>
                  <td>
                    <b-form-input
                      :readonly="true"
                      size="sm"
                      v-model="item.totalPrice"
                      type="number"
                      placeholder="รวม"
                    ></b-form-input>
                  </td>
                  <td><b-button @click="deleteTwo(index)" pill size="sm" variant="outline-danger"><font-awesome-icon icon="trash" /></b-button></td>
                </tr>
              </template>
              <tr style="text-align: end;">
                <td colspan="3">
                  <h5>รวมทั้งหมด</h5>
                </td>
                <td colspan="2" style="text-align: end;">
                <h5>{{ totalPriceTwo }}</h5>
                </td>
              </tr>
              <tr style="text-align: end;">
                <td colspan="5">
                  <b-button @click="addDataTwo()" size="sm" variant="primary"
                    >เพิ่ม</b-button
                  >
                </td>
              </tr>
            </table>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="6">
        <b-row>
          <b-col md="12">
            <h4>3 ตัว</h4>
            <hr />
          </b-col>
          <b-col md="12">
            <table
              class="small md-1 striped hover"
              style="width: 100%"
              v-if="ready"
            >
              <tr style="text-align: center;">
                <th>เลข</th>
                <th>เต็ง</th>
                <th>โตีด</th>
                <th>ล่าง</th>
                <th>รวม</th>
                <th>Action</th>
              </tr>
              <template v-for="(item, index) in lotto.dataThree">
                <tr v-bind:key="index">
                  <td>
                    <b-form-input
                      required
                      size="sm"
                      v-model="item.number"
                      type="text"
                      maxlength="3"
                      placeholder="เลข"
                    ></b-form-input>
                  </td>
                  <td>
                    <b-form-input
                      required
                      size="sm"
                      v-model="item.favorite"
                      type="number"
                      v-on:change="calculateThree(index)"
                      placeholder="เต็ง"
                    ></b-form-input>
                  </td>
                  <td>
                    <b-form-input
                      required
                      size="sm"
                      v-model="item.todd"
                      v-on:change="calculateThree(index)"
                      type="number"
                      placeholder="โต๊ด"
                    ></b-form-input>
                  </td>
                  <td>
                    <b-form-input
                      required
                      size="sm"
                      v-model="item.lower"
                      v-on:change="calculateThree(index)"
                      type="number"
                      placeholder="ล่าง"
                    ></b-form-input>
                  </td>
                  <td>
                    <b-form-input
                      :readonly="true"
                      size="sm"
                      v-model="item.totalPrice"
                      type="number"
                      placeholder="รวม"
                    ></b-form-input>
                  </td>
                  <td><b-button @click="deleteThree(index)" pill size="sm" variant="outline-danger"><font-awesome-icon icon="trash" /></b-button></td>
                </tr>
              </template>
              <tr style="text-align: end;">
                <td colspan="4">
                  <h5>รวมทั้งหมด</h5>
                </td>
                <td colspan="2" style="text-align: end;">
                  <h5> {{ totalPriceThree }}</h5>

                </td>
              </tr>
              <tr style="text-align: end;">
                <td colspan="6">
                  <b-button @click="addDataThree()" size="sm" variant="primary"
                    >เพิ่ม</b-button
                  >
                </td>
              </tr>
            </table>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12" style="margin-top: 50px; text-align: end;">
        <h2>รวมทั้งหมด {{totalPriceTwo+totalPriceThree}}</h2>
        <hr/>
      </b-col>

    </b-row>
    <b-row>
      <b-col offset-md="11" md="1">
        <b-button @click="saveData()" variant="success">บันทึก</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts" src="./lotto.detail.ts" />
<style>
table {
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
th {
  background-color: slategrey;
}
</style>
