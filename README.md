# UH5555.github.io
<!DOCTYPE html>
<script src="java.js"></script>
<html>

  <head>

    <meta charset="UTF-8">

    <title>前后轴载荷计算器</title>

    <style>

      label {

        display: inline-block;

        width: 150px;

        text-align: right;

      }

      input[type="number"] {

        width: 80px;

      }

      #result {

        font-weight: bold;

        font-size: 18px;

      }

    </style>

  </head>

  <body>

    <h1>前后轴载荷计算器</h1>

    <form>

      <label for="total-weight">车辆总重（kg）：</label>

      <input type="number" id="total-weight" required><br>

      <label for="front-axle-position">前轴位置（相对车辆前端的距离，mm）：</label>

      <input type="number" id="front-axle-position" required><br>

      <label for="rear-axle-position">后轴位置（相对车辆前端的距离，mm）：</label>

      <input type="number" id="rear-axle-position" required><br>

      <label for="cg-position">重心位置（相对车辆前端的距离，mm）：</label>

      <input type="number" id="cg-position" required><br>

      <button type="button" onclick="calculate()">计算</button>

    </form>

    <div id="result"></div>

    <script src="script.js"></script>

  </body>

</html>
