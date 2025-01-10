/* eslint-disable no-unused-vars */
import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary min-h-screen flex items-center">
          <div className="container">
            <h2 className="text-xl font-medium">Đã xảy ra lỗi!</h2>
            <p>Vui lòng tải lại trang hoặc thử lại sau.</p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
