export enum CommandType {
  Start = 'START',
  End = 'END',
  Measure = 'MEASURE',
  BPMChange = 'BPMCHANGE',
  Delay = 'DELAY',
  Scroll = 'SCROLL',
  GoGoStart = 'GOGOSTART',
  GoGoEnd = 'GOGOEND',
  BarLineOff = 'BARLINEOFF',
  BarLineOn = 'BARLINEON',
  BranchStart = 'BRANCHSTART',
  BranchEnd = 'BRANCHEND',
  Section = 'SECTION',
  Lyric = 'LYRIC',
  LevelHold = 'LEVELHOLD',
  BMScroll = 'BMSCROLL',
  HBScroll = 'HBSCROLL',
  SENoteChange = 'SENOTECHANGE',
  NextSong = 'NEXTSONG',
  Direction = 'DIRECTION',
  Sudden = 'SUDDEN',
  JPosScroll = 'JSPOSSCROLL',

  BranchMarker = '__BRANCHMARKER',
  NoteSequence = '__NOTESEQUENCE',
}