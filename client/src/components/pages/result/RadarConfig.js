export const RadarData = {
  labels: [
    "นักเทคโนโลยีสารสนเทศ",
    "วิศวกร",
    "นักสาธารณสุข",
    "นักการตลาดการจัดการ",
    "อาจารย์แพทย์",
    "แพทย์",
  ],
  datasets: [
    {
      label: "ทัศนคติต่ออาชีพ",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      //backgroundColor: "rgba(34, 202, 236, .2)",
      //borderColor: "rgba(34, 202, 236, 1)",
      //pointBackgroundColor: "rgba(34, 202, 236, 1)",
      //poingBorderColor: "#fff",
      //pointHoverBackgroundColor: "#fff",
      //pointHoverBorderColor: "rgba(34, 202, 236, 1)",
      data: [2.8, 2.8, 3.8, 2.2, 3.8, 4.2],
    },
  ],
};
export const RadarOptions = {
  scale: {
    ticks: {
      min: 0,
      max: 5,
      stepSize: 0.5,
      showLabelBackdrop: false,
      backdropColor: "rgba(203, 197, 11, 1)",
    },
    angleLines: {
      color: "rgba(255, 255, 255, .3)",
      lineWidth: 1,
    },
    gridLines: {
      color: "rgba(255, 255, 255, .3)",
      circular: true,
    },
  },
};
