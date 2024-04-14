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
      isCompleteOrderRefunded: false,
    },
    customerEmail: "simranjeet.kaur@basil.health",
    orderDetails: [
      {
        id: "D101",
        name: "Mix Berry Smoothie",
        customization: "Low Fat",
        amount: 199,
        status: "Refund Completed",
      },
      {
        id: "D102",
        name: "Blueberry Fruit Punch",
        customization: "Low Sugar",
        amount: 250,
        status: "Pending",
      },
    ],
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
      refundId: null,
      isCompleteOrderRefunded: false,
    },
    customerEmail: "sakshi.babbar@gmail.com",
    orderDetails: [
      {
        id: "D101",
        name: "Mix Berry Smoothie",
        customization: "Low Fat",
        amount: 199,
        status: "Success",
      },
      {
        id: "D103",
        name: "Pineapple Mojito",
        customization: "More soda",
        amount: 250,
        status: "Success",
      },
    ],
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
      isCompleteOrderRefunded: true,
    },
    customerEmail: "deepak.agrawal@gmail.com",
    orderDetails: [
      {
        id: "D104",
        name: "Mint Lemonade",
        customization: "A bit sweet",
        amount: 199,
        status: "Failure",
      },
      {
        id: "D105",
        name: "Blackberry Margarita",
        customization: "Low Sugar",
        amount: 299,
        status: "Failure",
      },
      {
        id: "D102",
        name: "Blueberry Fruit Punch",
        customization: "Low Sugar",
        amount: 250,
        status: "Failure",
      },
    ],
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
      refundId: null,
      isCompleteOrderRefunded: false,
    },
    customerEmail: "swati.shrivastava@gmail.com",
    orderDetails: [
      {
        id: "D106",
        name: "Strawberry Punch",
        customization: "Low Sugar",
        amount: 180,
        status: "Success",
      },
      {
        id: "D102",
        name: "Blueberry Fruit Punch",
        customization: "Low Sugar",
        amount: 250,
        status: "Success",
      },
    ],
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
    totalAmount: 800,
    paymentDetails: {
      paymentId: "TX1042480129479",
      refundId: null,
      isCompleteOrderRefunded: false,
    },
    customerEmail: "radhika.bansal@gmail.com",
    orderDetails: [
      {
        id: "D103",
        name: "Pineapple Mojito",
        customization: "More sweet",
        amount: 250,
        status: "Success",
      },
      {
        id: "D105",
        name: "Blackberry Margarita",
        customization: "Low Sugar",
        amount: 299,
        status: "Success",
      },
      {
        id: "D107",
        name: "Frappuchino",
        customization: "More Sugar",
        amount: 199,
        status: "Success",
      },
    ],
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
      refundId: null,
      isCompleteOrderRefunded: false,
    },
    customerEmail: "prakhar.kumar@gmail.com",
    orderDetails: [
      {
        id: "D101",
        name: "Mix Berry Smoothie",
        customization: "Low Fat",
        amount: 199,
        status: "Sent",
      },
      {
        id: "D102",
        name: "Blueberry Fruit Punch",
        customization: "Low Sugar",
        amount: 250,
        status: "Success",
      },
    ],
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
    orderStatus: "Success",
    totalAmount: 700,
    paymentDetails: {
      paymentId: "TX1042480129477",
      refundId: "TX1042480129477",
      isCompleteOrderRefunded: false,
    },
    customerEmail: "sakshi.bharadwaj@gmail.com",
    orderDetails: [
      {
        id: "D106",
        name: "Strawberry Punch",
        customization: "Low Honey",
        amount: 180,
        status: "Refund Initiated",
      },
      {
        id: "D102",
        name: "Blueberry Fruit Punch",
        customization: "Low Sugar",
        amount: 250,
        status: "Success",
      },
    ],
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
    orderStatus: "Success",
    totalAmount: 799,
    paymentDetails: {
      paymentId: "TX1042480129476",
      refundId: "TX1042480129476",
      isCompleteOrderRefunded: false,
    },
    customerEmail: "smriti.rana@gmail.com",
    orderDetails: [
      {
        id: "D101",
        name: "Mix Berry Smoothie",
        customization: "Low Fat",
        amount: 199,
        status: "Success",
      },
      {
        id: "D104",
        name: "Mint Lemonade",
        customization: "Low Sugar",
        amount: 199,
        status: "Refund Completed",
      },
    ],
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
      refundId: null,
      isCompleteOrderRefunded: false,
    },
    customerEmail: "simranjeet.kaur@basil.health",
    orderDetails: [
      {
        id: "D101",
        name: "Mix Berry Smoothie",
        customization: "Low Fat",
        amount: 199,
        status: "Sent",
      },
      {
        id: "D102",
        name: "Blueberry Fruit Punch",
        customization: "Low Sugar",
        amount: 250,
        status: "Success",
      },
      {
        id: "D103",
        name: "Pineapple Mojito",
        customization: "Low Sugar",
        amount: 250,
        status: "Success",
      },
    ],
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
      isCompleteOrderRefunded: true,
    },
    customerEmail: "radhika.bansal@gmail.com",
    orderDetails: [
      {
        id: "D101",
        name: "Mix Berry Smoothie",
        customization: "WIth full cream milk",
        amount: 199,
        status: "Refund Completed",
      },
      {
        id: "D107",
        name: "Frappuchino",
        customization: "More Sugar",
        amount: 199,
        status: "Refund Completed",
      },
    ],
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
      refundId: null,
      isCompleteOrderRefunded: false,
    },
    customerEmail: "smriti.rana@gmail.com",
    orderDetails: [
      {
        id: "D105",
        name: "Blackberry Margarita",
        customization: "Low Fat",
        amount: 299,
        status: "Success",
      },
      {
        id: "D102",
        name: "Blueberry Fruit Punch",
        customization: "Low Sugar",
        amount: 250,
        status: "Success",
      },
    ],
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
      refundId: null,
      isCompleteOrderRefunded: false,
    },
    customerEmail: "sakshi.bharadwaj@gmail.com",
    orderDetails: [
      {
        id: "D101",
        name: "Mix Berry Smoothie",
        customization: "Low Fat",
        amount: 199,
        status: "Success",
      },
      {
        id: "D104",
        name: "Mint Lemonade",
        customization: "More Sugar",
        amount: 199,
        status: "Success",
      },
    ],
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
    orderStatus: "Refund Initiated",
    totalAmount: 400,
    paymentDetails: {
      paymentId: "TX1042480129471",
      refundId: "TX1042480129471",
      isCompleteOrderRefunded: true,
    },
    customerEmail: "sumit.khanna@gmail.com",
    orderDetails: [
      {
        id: "D101",
        name: "Mix Berry Smoothie",
        customization: "Low Fat",
        amount: 199,
        status: "Refund Completed",
      },
      {
        id: "D107",
        name: "Frappuchino",
        customization: "Low Sugar",
        amount: 199,
        status: "Refund Initiated",
      },
    ],
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
      refundId: null,
      isCompleteOrderRefunded: false,
    },
    customerEmail: "carlos.sainz55@gmail.com",
    orderDetails: [
      {
        id: "D107",
        name: "Frappuchino",
        customization: "Low Fat",
        amount: 199,
        status: "Sent",
      },
      {
        id: "D102",
        name: "Blueberry Fruit Punch",
        customization: "Low Sugar",
        amount: 250,
        status: "Success",
      },
    ],
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
      refundId: null,
      isCompleteOrderRefunded: false,
    },
    customerEmail: "charles.lec16@gmail.com",
    orderDetails: [
      {
        id: "D107",
        name: "Frappuchino",
        customization: "Low Fat",
        amount: 199,
        status: "Success",
      },
      {
        id: "D105",
        name: "Blackberry Margarita",
        customization: "More berry flavour",
        amount: 299,
        status: "Success",
      },
      {
        id: "D101",
        name: "Mix Berry Smoothie",
        customization: "With Oat milk",
        amount: 250,
        status: "Success",
      },
      {
        id: "D104",
        name: "Mint Lemonade",
        customization: "A bit less sour and more sweet",
        amount: 199,
        status: "Success",
      },
      {
        id: "D108",
        name: "Dragon Fruit Martini",
        customization: "less sweet",
        amount: 299,
        status: "Success",
      },
    ],
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
      isCompleteOrderRefunded: true,
    },
    customerEmail: "shrey.agrawal@gmail.com",
    orderDetails: [
      {
        id: "D101",
        name: "Mix Berry Smoothie",
        customization: "Low Fat",
        amount: 199,
        status: "Failure",
      },
      {
        id: "D102",
        name: "Blueberry Fruit Punch",
        customization: "Low Sugar",
        amount: 250,
        status: "Failure",
      },
    ],
  },
];
