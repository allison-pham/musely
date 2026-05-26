export default function NewJarForm() {
  const [selectedMood, setSelectedMood] = useState(null); // null = nothing has been selected yet
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");
  const [journalNote, setJournalNote] = useState("");

  return (
    <div>
      {/* Mood */}
      <input
        type="text"
        placeholder="Mood"
        value={selectedMood}
        onChange={(e) => setSelectedMood(e.target.value)}
      />
      <p>{selectedMood}</p>
      {/* Album */}
      <input
        type="text"
        placeholder="Album name"
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
      />
      <p>{album}</p> {/* Stored in album state variable */}
      {/* Artist */}
      <input
        type="text"
        placeholder="Artist name"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <p>{artist}</p>
      {/* Journal note */}
      <textarea
        placeholder="What feelings does this album hold right now?"
        value={journalNote}
        onChange={(e) => setJournalNote(e.target.value)}
        rows={5}
      />
      <p>{journalNote}</p>
    </div>
  );
}
