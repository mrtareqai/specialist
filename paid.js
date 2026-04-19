const orders = {
  // أضف الطلبات المدفوعة هنا
  // مثال:
    "ORD-TEST-2026": {
    result: "الطب مناسب لك",
    details: "تحليل تفصيلي: لديك المواهب والاهتمامات المناسبة لمجال الطب. نقاط قوتك تشمل الدقة والصبر والرغبة في مساعدة الآخرين. التخصصات الموصى بها: طب عام، جراحة، طب الأسنان، الصيدلة."
    }
};

// دالة للتحقق من دفع الطلب
function isPaid(orderId) {
    return orders.hasOwnProperty(orderId);
}

// دالة للحصول على نتيجة الطلب
function getOrderResult(orderId) {
    if (isPaid(orderId)) {
        return orders[orderId];
    }
    return null;
}

// دالة لإضافة طلب مدفوع جديد (للاستخدام من النظام الخلفي)
function addPaidOrder(orderId, result, details = '') {
    orders[orderId] = {
    result: result,
    details: details
    };
    console.log(`تم إضافة الطلب المدفوع: ${orderId}`);
    return true;
}
