import suppliedMusic from './assets/musica-fondo.mp3'

// El audio aportado se sirve con la invitación; la variable permite sustituirlo.
export const backgroundMusicUrl = import.meta.env.VITE_INVITATION_MUSIC_URL || suppliedMusic
