function calculate() {
  // 获取输入值
  var totalWeight = parseFloat(document.getElementById("total-weight").value);
  var frontAxlePosition = parseFloat(document.getElementById("front-axle-position").value);
  var rearAxlePosition = parseFloat(document.getElementById("rear-axle-position").value);
  var cgPosition = parseFloat(document.getElementById("cg-position").value);

  // 计算前后轴载荷
  var wheelbase = rearAxlePosition - frontAxlePosition;
  var frontAxleLoad = totalWeight * (wheelbase - cgPosition + frontAxlePosition) / wheelbase;
  var rearAxleLoad = totalWeight * (cgPosition - frontAxlePosition) / wheelbase;

  // 显示结果
  document.getElementById("result").innerHTML = "前轴载荷：" + frontAxleLoad.toFixed(2) + "kg，后轴载荷：" + rearAxleLoad.toFixed(2) + "kg。";
}
