import { OrdersModel } from "../../models/OrdersModel";

export const ordersData: OrdersModel[] = [
  {
    orderId: "OD101",
    machineName: "Aahaar Stall 23",
    machineCode: "MI023",
    customerName: "Simranjeet Kaur",
    contactNumber: "9999999999",
    orderDate: new Date(
      Date.now() - 1000 * 60 * 60 * 24 * (Math.random() * (20 - 1) + 1)
    ),
    orderStatus: "Pending",
    totalAmount: 700,
    paymentDetails: {
      paymentId: "TX1042480129481",
      refundId: "TX1042480129481",
    },
    customerEmail: "simranjeet.kaur@basil.health",
  },
  {
    orderId: "OD100",
    machineName: "Aahaar Stall 13",
    machineCode: "MI013",
    customerName: "Sakshi Babbar",
    contactNumber: "9999994950",
    orderDate: new Date(
      Date.now() - 1000 * 60 * 60 * 24 * (Math.random() * (20 - 1) + 1)
    ),
    orderStatus: "Success",
    totalAmount: 1000,
    paymentDetails: {
      paymentId: "TX1042480129482",
      refundId: "TX1042480129482",
    },
    customerEmail: "sakshi.babbar@gmail.com",
  },
  {
    orderId: "OD099",
    machineName: "Aahaar Stall 02",
    machineCode: "MI002",
    customerName: "Deepak Agrawal",
    contactNumber: "7894561230",
    orderDate: new Date(
      Date.now() - 1000 * 60 * 60 * 24 * (Math.random() * (20 - 1) + 1)
    ),
    orderStatus: "Failure",
    totalAmount: 500,
    paymentDetails: {
      paymentId: "TX1042480129483",
      refundId: "TX1042480129483",
    },
    customerEmail: "deepak.agrawal@gmail.com",
  },
  {
    orderId: "OD098",
    machineName: "Aahaar Stall 02",
    machineCode: "MI002",
    customerName: "Swati Shrivastava",
    contactNumber: "8894561231",
    orderDate: new Date(
      Date.now() - 1000 * 60 * 60 * 24 * (Math.random() * (20 - 1) + 1)
    ),
    orderStatus: "Success",
    totalAmount: 550,
    paymentDetails: {
      paymentId: "TX1042480129480",
      refundId: "TX1042480129480",
    },
    customerEmail: "swati.shrivastava@gmail.com",
  },
  {
    orderId: "OD097",
    machineName: "Aahaar Stall 22",
    machineCode: "MI022",
    customerName: "Radhika Bansal",
    contactNumber: "9563214764",
    orderDate: new Date(
      Date.now() - 1000 * 60 * 60 * 24 * (Math.random() * (20 - 1) + 1)
    ),
    orderStatus: "Success",
    totalAmount: 200,
    paymentDetails: {
      paymentId: "TX1042480129479",
      refundId: "TX1042480129479",
    },
    customerEmail: "radhika.bansal@gmail.com",
  },
  {
    orderId: "OD096",
    machineName: "Aahaar Stall 15",
    machineCode: "MI015",
    customerName: "Prakhar Kumar",
    contactNumber: "7309858532",
    orderDate: new Date(
      Date.now() - 1000 * 60 * 60 * 24 * (Math.random() * (20 - 1) + 1)
    ),
    orderStatus: "Sent",
    totalAmount: 500,
    paymentDetails: {
      paymentId: "TX1042480129478",
      refundId: "TX1042480129478",
    },
    customerEmail: "prakhar.kumar@gmail.com",
  },
  {
    orderId: "OD095",
    machineName: "Aahaar Stall 10",
    machineCode: "MI010",
    customerName: "Sakshi Bharadwaj",
    contactNumber: "8899002020",
    orderDate: new Date(
      Date.now() - 1000 * 60 * 60 * 24 * (Math.random() * (20 - 1) + 1)
    ),
    orderStatus: "Refund Initiated",
    totalAmount: 700,
    paymentDetails: {
      paymentId: "TX1042480129477",
      refundId: "TX1042480129477",
    },
    customerEmail: "sakshi.bharadwaj@gmail.com",
  },
  {
    orderId: "OD094",
    machineName: "Aahaar Stall 10",
    machineCode: "MI010",
    customerName: "Smriti Rana",
    contactNumber: "7899002042",
    orderDate: new Date(
      Date.now() - 1000 * 60 * 60 * 24 * (Math.random() * (20 - 1) + 1)
    ),
    orderStatus: "Refund Completed",
    totalAmount: 799,
    paymentDetails: {
      paymentId: "TX1042480129476",
      refundId: "TX1042480129476",
    },
    customerEmail: "smriti.rana@gmail.com",
  },
  {
    orderId: "OD093",
    machineName: "Aahaar Stall 11",
    machineCode: "MI011",
    customerName: "Simranjeet Kaur",
    contactNumber: "9999999999",
    orderDate: new Date(
      Date.now() - 1000 * 60 * 60 * 24 * (Math.random() * (20 - 1) + 1)
    ),
    orderStatus: "Sent",
    totalAmount: 599,
    paymentDetails: {
      paymentId: "TX1042480129475",
      refundId: "TX1042480129475",
    },
    customerEmail: "simranjeet.kaur@basil.health",
  },
  {
    orderId: "OD092",
    machineName: "Aahaar Stall 12",
    machineCode: "MI012",
    customerName: "Radhika Bansal",
    contactNumber: "9563214764",
    orderDate: new Date(
      Date.now() - 1000 * 60 * 60 * 24 * (Math.random() * (20 - 1) + 1)
    ),
    orderStatus: "Refund Completed",
    totalAmount: 850,
    paymentDetails: {
      paymentId: "TX1042480129474",
      refundId: "TX1042480129474",
    },
    customerEmail: "radhika.bansal@gmail.com",
  },
  {
    orderId: "OD091",
    machineName: "Aahaar Stall 15",
    machineCode: "MI015",
    customerName: "Smriti Rana",
    contactNumber: "7899002042",
    orderDate: new Date(
      Date.now() - 1000 * 60 * 60 * 24 * (Math.random() * (20 - 1) + 1)
    ),
    orderStatus: "Success",
    totalAmount: 550,
    paymentDetails: {
      paymentId: "TX1042480129473",
      refundId: "TX1042480129473",
    },
    customerEmail: "smriti.rana@gmail.com",
  },
  {
    orderId: "OD090",
    machineName: "Aahaar Stall 20",
    machineCode: "MI020",
    customerName: "Sakshi Bharadwaj",
    contactNumber: "8899002020",
    orderDate: new Date(
      Date.now() - 1000 * 60 * 60 * 24 * (Math.random() * (20 - 1) + 1)
    ),
    orderStatus: "Success",
    totalAmount: 1199,
    paymentDetails: {
      paymentId: "TX1042480129472",
      refundId: "TX1042480129472",
    },
    customerEmail: "sakshi.bharadwaj@gmail.com",
  },
  {
    orderId: "OD089",
    machineName: "Aahaar Stall 10",
    machineCode: "MI010",
    customerName: "Sumit Khanna",
    contactNumber: "7788994400",
    orderDate: new Date(
      Date.now() - 1000 * 60 * 60 * 24 * (Math.random() * (20 - 1) + 1)
    ),
    orderStatus: "Refund Completed",
    totalAmount: 400,
    paymentDetails: {
      paymentId: "TX1042480129471",
      refundId: "TX1042480129471",
    },
    customerEmail: "sumit.khanna@gmail.com",
  },
  {
    orderId: "OD088",
    machineName: "Aahaar Stall 25",
    machineCode: "MI025",
    customerName: "Carlos Sainz",
    contactNumber: "5587400200",
    orderDate: new Date(
      Date.now() - 1000 * 60 * 60 * 24 * (Math.random() * (20 - 1) + 1)
    ),
    orderStatus: "Sent",
    totalAmount: 1299,
    paymentDetails: {
      paymentId: "TX1042480129470",
      refundId: "TX1042480129470",
    },
    customerEmail: "carlos.sainz55@gmail.com",
  },
  {
    orderId: "OD087",
    machineName: "Aahaar Stall 25",
    machineCode: "MI025",
    customerName: "Charles Leclerc",
    contactNumber: "6673639900",
    orderDate: new Date(
      Date.now() - 1000 * 60 * 60 * 24 * (Math.random() * (20 - 1) + 1)
    ),
    orderStatus: "Success",
    totalAmount: 1099,
    paymentDetails: {
      paymentId: "TX1042480129469",
      refundId: "TX1042480129469",
    },
    customerEmail: "charles.lec16@gmail.com",
  },
  {
    orderId: "OD086",
    machineName: "Aahaar Stall 12",
    machineCode: "MI012",
    customerName: "Shrey Agrawal",
    contactNumber: "9563216494",
    orderDate: new Date(
      Date.now() - 1000 * 60 * 60 * 24 * (Math.random() * (20 - 1) + 1)
    ),
    orderStatus: "Failure",
    totalAmount: 999,
    paymentDetails: {
      paymentId: "TX1042480129468",
      refundId: "TX1042480129468",
    },
    customerEmail: "shrey.agrawal@gmail.com",
  },
];