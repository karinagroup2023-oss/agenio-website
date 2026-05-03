import { useState, useEffect } from 'react'
import { useTelegram } from './hooks/useTelegram'
import TabBar from './components/TabBar'
import HomeScreen from './screens/HomeScreen'
import CoursesScreen from './screens/CoursesScreen'
import EnrollScreen from './screens/EnrollScreen'
import AboutScreen from './screens/AboutScreen'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [enrollCourse, setEnrollCourse] = useState('')
  const { tg } = useTelegram()

  useEffect(() => {
    tg?.expand()
    tg?.setHeaderColor?.('#1E3A8A')
    tg?.ready()
  }, [])

  const goEnroll = (course) => {
    if (course && course.id) setEnrollCourse(course.id)
    setActiveTab('enroll')
  }

  const goCourses = (courseId) => {
    setActiveTab('courses')
  }

  return (
    <div style={{ height: '100dvh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
      <main style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {activeTab === 'home' && <HomeScreen onEnroll={goEnroll} onCourses={goCourses} />}
        {activeTab === 'courses' && <CoursesScreen onEnroll={goEnroll} />}
        {activeTab === 'enroll' && <EnrollScreen initialCourse={enrollCourse} />}
        {activeTab === 'about' && <AboutScreen onEnroll={goEnroll} />}
      </main>
      <TabBar active={activeTab} onChange={setActiveTab} />
    </div>
  )
}
