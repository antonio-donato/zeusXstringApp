# Regole di progetto

## Versione licenza

- A ogni modifica del codice, incrementare di 1 la versione licenza nel segmento patch (esempio: `3.0.1` -> `3.0.2`).
- A ogni aggiornamento della versione, aggiornare anche la parte relativa al changelog inserendo una sintesi delle modifiche apportate.
- Questa regola vale sempre, salvo direttive esplicite diverse fornite dall'utente.

## Messaggio di commit

- Nei messaggi di commit generati automaticamente, la prima parte del testo deve essere la nuova versione licenza.
- Formato consigliato: `v<major>.<minor>.<patch> <messaggio commit>`.
- Esempio: `v3.0.2 Corregge validazione input in homepage`.
