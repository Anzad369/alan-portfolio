import React, { useState, useRef } from 'react';

const projects = [
  { id: 1, title: 'Event', category: 'Event', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1780050077/video_2026-05-29_15-50-21_evctae.mp4' },
  { id: 2, title: 'Event', category: 'Event', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1780050076/video_2026-05-29_15-50-09_lorepi.mp4' },
  { id: 3, title: 'Event', category: 'Event', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1780050074/video_2026-05-29_15-50-29_kltpl1.mp4' },
  { id: 4, title: 'Event', category: 'Event', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1780050075/video_2026-05-29_15-50-24_okklma.mp4' },
  { id: 5, title: 'Event', category: 'Event', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1780050075/video_2026-05-29_15-50-26_kyxbvm.mp4' },
  { id: 6, title: 'Event', category: 'Event', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1780050074/video_2026-05-29_15-50-28_ms2hme.mp4' },
  { id: 7, title: 'Event', category: 'Event', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1780050074/video_2026-05-29_15-50-31_clxsv7.mp4' },
  { id: 8, title: 'Event', category: 'Event', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1780050073/video_2026-05-29_15-50-33_dvcz9d.mp4' },
  { id: 9, title: 'Event', category: 'Event', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1780050073/video_2026-05-29_15-50-35_qdfau1.mp4' },

  { id: 10, title: 'Cinematic Reels', category: 'Automobile Motion', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1773648916/VID-20260316-WA0022_yxifmh.mp4' },
  { id: 11, title: 'Precision Workshop', category: 'Automobile Motion', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1773648914/VID-20260316-WA0020_a2pc7o.mp4' },
  { id: 12, title: 'Build Dynamics', category: 'Automobile Motion', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1773648914/VID-20260316-WA0023_u85jx6.mp4' },
  { id: 13, title: 'Cinematic Reels', category: 'Automobile Motion', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1773648913/VID-20260316-WA0021_sgwz7y.mp4' },
  { id: 14, title: 'Cinematic Reels', category: 'Automobile Motion', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1773648913/VID-20260316-WA0019_p3its3.mp4' },
  { id: 15, title: 'Precision Workshop', category: 'Automobile Motion', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1773648911/VID-20260316-WA0017_jrbsm8.mp4' },
  { id: 16, title: 'Build Dynamics', category: 'Automobile Motion', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1773648911/VID-20260316-WA0018_lug8td.mp4' },
  { id: 17, title: 'Precision Workshop', category: 'Automobile Motion', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1773648911/VID-20260316-WA0016_tvu0u7.mp4' },

  { id: 18, title: 'Luxury Real Estate', category: 'Dubai Market', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1770736127/IMG_0625_objalt.mp4' },
  { id: 19, title: 'Short-Form Content', category: 'Dubai Market', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1770736127/2_xuegxk.mp4' },
  { id: 20, title: 'Luxury Real Estate', category: 'Dubai Market', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1770736125/IMG_0626_igwxtd.mp4' },
  { id: 21, title: 'Short-Form Content', category: 'Dubai Market', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1770736129/4_jkwgzb.mp4' },
  { id: 22, title: 'Luxury Real Estate', category: 'Dubai Market', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1770736130/IMG_0627_ted1ji.mp4' },
  { id: 23, title: 'Luxury Real Estate', category: 'Dubai Market', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1770736135/IMG_0629_vitbkp.mp4' },
  { id: 24, title: 'Luxury Real Estate', category: 'Dubai Market', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1770736131/IMG_0628_bx6vp4.mp4' },
  { id: 25, title: 'Short-Form Content', category: 'Dubai Market', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1770736130/8_gjtxrd.mp4' },
  { id: 26, title: 'Luxury Real Estate', category: 'Dubai Market', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1770736133/IMG_0630_b3w1jh.mp4' },
  { id: 27, title: 'Luxury Real Estate', category: 'Dubai Market', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1770736130/10_hgt4a4.mp4' },
  { id: 28, title: 'Short-Form Content', category: 'Social Strategy', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1770736126/11_z6fldy.mp4' },
  { id: 29, title: 'Luxury Real Estate', category: 'Dubai Market', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1770736124/1_pj8qjb.mp4' },
  { id: 30, title: 'Short-Form Content', category: 'Dubai Market', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1770736124/3_k8lsln.mp4' },
  { id: 31, title: 'Luxury Real Estate', category: 'Dubai Market', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1770736127/5_hbat2x.mp4' },
  { id: 32, title: 'Short-Form Content', category: 'Dubai Market', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1770736129/7_hn1xvh.mp4' },
  { id: 33, title: 'Luxury Real Estate', category: 'Dubai Market', src: 'https://res.cloudinary.com/dx2yhouml/video/upload/v1770736129/9_zedlwa.mp4' }
];

const VideoStrip = () => {
  // Track which video is currently opened in full screen view
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="video-section">
      <h2 className="section-label">Works</h2>

      <div className="film-strip">
        {projects.map(p => (
          <div 
            key={p.id} 
            className="video-card" 
            onClick={() => setActiveVideo(p)}
            style={{ cursor: 'pointer' }}
          >
            <video
              src={p.src}
              loop
              muted // Always muted on main feed layout to bypass browser restrictions
              playsInline
              preload="metadata" // Drastically cuts down initial page size weight
              onMouseEnter={e => {
                // Smoothly handles play promises to eliminate console abort warnings
                const playPromise = e.target.play();
                if (playPromise !== undefined) {
                  playPromise.catch(() => { /* safe fallthrough */ });
                }
              }}
              onMouseLeave={e => e.target.pause()}
            />

            <div className="video-overlay">
              <span>{p.category}</span>
              <h3>{p.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Pop-up Video Modal Overlay (Plays WITH sound) */}
      {activeVideo && (
        <div 
          className="video-modal-overlay"
          onClick={() => setActiveVideo(null)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div 
            className="video-modal-content"
            onClick={e => e.stopPropagation()} // Keeps modal open when clicking inside video wrapper
            style={{ position: 'relative', width: '100%', maxWidth: '450px' }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveVideo(null)}
              style={{
                position: 'absolute', top: '-40px', right: '0',
                background: 'none', border: 'none', color: '#fff',
                fontSize: '24px', cursor: 'pointer'
              }}
            >
              ✕
            </button>

            <video
              src={activeVideo.src}
              autoPlay
              controls // Gives users volume slider, scrubbing bar, and pause buttons
              playsInline
              style={{ width: '100%', borderRadius: '12px', maxHeight: '80vh' }}
            />
            
            <div style={{ color: '#fff', marginTop: '12px' }}>
              <span style={{ fontSize: '14px', opacity: 0.7 }}>{activeVideo.category}</span>
              <h3 style={{ margin: '4px 0 0 0' }}>{activeVideo.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoStrip;