import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // يمكنك هنا إرسال الخطأ إلى خدمة الرصد أو تسجيله بشكل آخر
    console.error("Caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // يمكنك هنا استبدال الرسالة برسالة خطأ أكثر تعقيدًا أو تخصيصها بشكل آخر
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
